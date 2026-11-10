#!/usr/bin/env python3
"""Eseguire dopo avere confermato dominio e percorso reale del sito.
Uso: python configura-dominio.py https://www.dominio-confermato.it/
Genera canonical, Open Graph e sitemap coerenti. Ripetibile.
"""
import sys, json, xml.etree.ElementTree as ET
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin
if len(sys.argv)!=2 or not sys.argv[1].startswith('https://'):
 raise SystemExit('Uso: python configura-dominio.py https://www.dominio-confermato.it/')
base=sys.argv[1].rstrip('/')+'/'
root=Path(__file__).resolve().parent
files=[p for p in root.rglob('*.html') if p.name!='promozioni.html']
for p in files:
 soup=BeautifulSoup(p.read_text(encoding='utf-8'),'html.parser')
 if not soup.head:continue
 path=p.relative_to(root).as_posix(); url=urljoin(base, ('/' if path=='index.html' else path))
 for tag in soup.head.select('link[rel="canonical"], meta[property="og:url"], meta[property="og:image"], script[type="application/ld+json"]'):tag.decompose()
 soup.head.append(soup.new_tag('link',rel='canonical',href=url))
 soup.head.append(soup.new_tag('meta',attrs={'property':'og:url','content':url}))
 if p.parent==root:
  import re
  image=soup.find('img',src=re.compile(r'^foto[-.].*\.(?:jpg|webp)$'))
  image_url=image.get('src') if image else 'foto.webp'
  soup.head.append(soup.new_tag('meta',attrs={'property':'og:image','content':urljoin(base,image_url)}))
 if p.name=='index.html' and p.parent==root:
  data={'@context':'https://schema.org','@type':'Organization','name':'Sinergie S.r.l.','url':base,'email':'info@sinergie2srl.it','telephone':'+390677590895','address':{'@type':'PostalAddress','streetAddress':'Viale Carlo Felice 101','postalCode':'00185','addressLocality':'Roma','addressCountry':'IT'}}
  sc=soup.new_tag('script',type='application/ld+json');sc.string=json.dumps(data,ensure_ascii=False);soup.head.append(sc)
 p.write_text(str(soup),encoding='utf-8')
ns='http://www.sitemaps.org/schemas/sitemap/0.9'; ET.register_namespace('',ns)
r=ET.Element('{%s}urlset'%ns)
for p in sorted(files):
 u=ET.SubElement(r,'{%s}url'%ns);ET.SubElement(u,'{%s}loc'%ns).text=urljoin(base,'/' if p.relative_to(root).as_posix()=='index.html' else p.relative_to(root).as_posix())
ET.ElementTree(r).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+urljoin(base,'sitemap.xml')+'\n',encoding='utf-8')
print('Configurate',len(files),'pagine per',base)
