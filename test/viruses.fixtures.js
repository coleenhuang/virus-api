function makeVirusesArray(){
  return [
    {
      virus_id: 1,
      virus_name: 'Influenza A virus',
      family: 1
    },
    {
      virus_id: 2,
      virus_name: 'SARS-CoV2',
      family: 5
    },
    {
      virus_id: 3,
      virus_name: 'MERS-CoV',
      family: 5
    },
    {
      virus_id: 4,
      virus_name: 'Ebola virus',
      family: 6
    }
  ]
}

module.exports = {
  makeVirusesArray,
}
