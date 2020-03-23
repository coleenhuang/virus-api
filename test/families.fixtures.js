function makeFamiliesArray(){
  return [
    {
      family_id: 1,
      family_name: 'Coronaviruses',
      virus_type: 'IV'
    },
    {
      family_id: 2,
      family_name: 'Bunyaviruses',
      virus_type: 'V'
    },
    {
      family_id: 3,
      family_name: 'Reoviruses',
      virus_type: 'III'
    },
    {
      family_id: 4,
      family_name: 'Poxviruses',
      virus_type: 'I'
    }
  ];
}

module.exports = {
  makeFamiliesArray,
}
