function makeFamiliesArray(){
  return [
    {
      family_id: 1,
      family_name: 'Orthomyxoviridae',
      subfamily: null,
      virus_type: 'V'
    },
    {
      family_id: 2,
      family_name: 'Caliciviridae',
      subfamily: null,
      virus_type: 'IV'
    },
    {
      family_id: 3,
      family_name: 'Picornaviridae',
      subfamily: null,
      virus_type: 'IV'
    },
    {
      family_id: 4,
      family_name: 'Herpesviridae',
      subfamily: 'Alphaherpesvirinae',
      virus_type: 'I'
    },

  ];
}

module.exports = {
  makeFamiliesArray,
}
