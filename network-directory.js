/* Filtro dei professionisti: nessun servizio esterno o tracciamento. */
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('network-query');
  const roleFilter = document.getElementById('network-role');
  const areaFilter = document.getElementById('network-area');
  const resultCount = document.getElementById('network-count');
  const emptyMessage = document.getElementById('network-empty');
  const cards = [...document.querySelectorAll('.network-person')];

  if (!search || !roleFilter || !areaFilter || !resultCount || !emptyMessage) return;

  const collator = new Intl.Collator('it', { sensitivity: 'base' });
  const roleLabels = {
    Avvocato: 'Avvocati',
    Coordinamento: 'Coordinamento',
    Consulente: 'Consulenti',
    Professionista: 'Altre professionalità',
  };
  const normalize = (value) => String(value ?? '')
    .toLocaleLowerCase('it')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // La ricerca non deve rileggere tutto il testo delle schede a ogni tasto.
  const records = cards.map((element) => ({
    element,
    searchableText: normalize(element.textContent),
    role: element.dataset.role || '',
    area: element.dataset.area || '',
  }));

  const populateFilter = (select, field, placeholder, labelFor) => {
    const previousValue = select.value;
    const values = [...new Set(records.map((record) => record[field]).filter(Boolean))]
      .sort(collator.compare);

    select.replaceChildren(
      new Option(placeholder, ''),
      ...values.map((value) => new Option(labelFor(value), value)),
    );
    if (values.includes(previousValue)) select.value = previousValue;
  };

  populateFilter(roleFilter, 'role', 'Tutte le attività', (value) => roleLabels[value] || value);
  populateFilter(areaFilter, 'area', 'Tutte le regioni', (value) =>
    value === 'Non indicata' ? 'Regione non indicata' : value);

  const update = () => {
    const query = normalize(search.value.trim());
    const selectedRole = roleFilter.value;
    const selectedArea = areaFilter.value;
    let visible = 0;

    for (const record of records) {
      const matches = (!query || record.searchableText.includes(query))
        && (!selectedRole || record.role === selectedRole)
        && (!selectedArea || record.area === selectedArea);

      record.element.hidden = !matches;
      if (matches) visible += 1;
    }

    resultCount.textContent = `${visible} ${visible === 1
      ? 'profilo trovato' : 'profili trovati'}`;
    emptyMessage.hidden = visible !== 0;
  };

  search.addEventListener('input', update);
  roleFilter.addEventListener('change', update);
  areaFilter.addEventListener('change', update);
  update();
});
