const onlyH2Data = [
  {
    id: 'first-heading',
    text: 'First heading',
    offsetTop: 100,
    subSections: []
  },
  {
    id: 'second-heading',
    text: 'Second heading',
    offsetTop: 200,
    subSections: []
  },
  {
    id: 'third-heading',
    text: 'Third heading',
    offsetTop: 300,
    subSections: []
  }
];

const allData = [
  {
    id: 'first-heading',
    text: 'First heading',
    offsetTop: 100,
    subSections: []
  },
  {
    id: 'second-heading',
    text: 'Second heading',
    offsetTop: 200,
    subSections: [
      {
        id: 'second-heading__1',
        text: 'First sub-heading of the second heading',
        offsetTop: 225,
        subSections: []
      }
    ]
  },
  {
    id: 'third-heading',
    text: 'Third heading',
    offsetTop: 300,
    subSections: []
  }
];

export { onlyH2Data, allData };
