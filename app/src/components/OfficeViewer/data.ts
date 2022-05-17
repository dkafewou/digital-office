export const POIs = [
  {
    id:          "5d1739ac-27ca-5788-a9fd-c8decc13d690",
    name:        "toilets",
    available:   true,
    coordinates: [
      {
        levelIndex: 0,
        x:          15.04806712881521,
        z:          -23.33454991034874,
        elevation:  3,
      },
      {
        levelIndex: 0,
        x:          11.295745340092939,
        z:          -23.35437606203257,
        elevation:  3.000000000000001,
      },
      {
        levelIndex: 0,
        x:          11.324318728195218,
        z:          -16.63384538418456,
        elevation:  3.000000000000001,
      },
      {
        levelIndex: 0,
        x:          15.092448946981085,
        z:          -16.68764442736808,
        elevation:  2.999999999999999,
      },
    ],
  },
  {
    id:          "63de941e-8b30-5bbd-b169-f8936c07c838",
    name:        "coffee",
    available:   true,
    coordinates: [
      {
        levelIndex: 1,
        x:          14.89187724621965,
        z:          -3.426680312717954,
        elevation:  3,
      },
      {
        levelIndex: 1,
        x:          23.506329507114124,
        z:          -3.430675090338319,
        elevation:  2.9999999999999982,
      },
      {
        levelIndex: 1,
        x:          23.41269488016559,
        z:          -8.016338429811265,
        elevation:  2.9873285046245375,
      },
      {
        levelIndex: 1,
        x:          14.887605867663623,
        z:          -7.896800623116045,
        elevation:  3.0000000000000018,
      },
    ],
  },
  {
    id:          "7170ca48-c9de-56e5-9a4f-d7f1ebf3cdaf",
    name:        "printers",
    available:   true,
    coordinates: [
      {
        levelIndex: 1,
        x:          36.50321724735736,
        z:          -31.889972015465478,
        elevation:  3,
      },
      {
        levelIndex: 1,
        x:          40.204957245318305,
        z:          -31.873666221847362,
        elevation:  3.0000000000000036,
      },
      {
        levelIndex: 1,
        x:          40.18676019873648,
        z:          -35.819203830933375,
        elevation:  2.9999999999999982,
      },
      {
        levelIndex: 1,
        x:          36.50157059348514,
        z:          -35.8042262584227,
        elevation:  3.0000000000000036,
      },
    ],
  },
]

export const Desks = [
  {
    name:        "desk",
    furnitureId: "b0b1d83b-2429-4b3d-abc2-6a3b77abe8ed",
    available:   false,
  }
]

export const Path: any = {
  "coffee":       {
    coordinates: [
      { levelIndex: 1, x: 18.75255433943024, z: -7.53487279604925, elevation: 2.8990001678466797 },
      { levelIndex: 1, x: 13.08836460475706, z: -9.949418660292451, elevation: 0.009999990463256836 },
      { levelIndex: 1, x: 14.225372966318409, z: -23.168005333452953, elevation: 0.009999990463263941 },
      { levelIndex: 0, x: 14.287770210889262, z: -27.852569580078125, elevation: 0.09439083271495008 },
      { levelIndex: 0, x: 13.259901867673893, z: -30.615920988029977, elevation: 0.7090639898063742 },
    ],
    id:          "bb75b6ec-da36-57a1-9de5-b5be9ea9ac4e",
    name:        "coffee path",
  },
  "desk": {
    coordinates: [
      { levelIndex: 0, x: 22.975711547457212, z: -22.485789589028677, elevation: 0.9363256105933857 },
      { levelIndex: 0, x: 21.774437232873556, z: -21.930446954943406, elevation: 0.0020000000950091135 },
      { levelIndex: 1, x: 13.35006749632488, z: -30.740921020507812, elevation: -2.347187741169506 },
    ],
    id:          "eddff670-0a72-5c78-86fe-d2aaa67e0705",
    name:        "desk path",
  },
  "toilets":      {
    coordinates: [
      { levelIndex: 0, x: 13.185209955441556, z: -30.57521109042588, elevation: 1.0443452443526056 },
      { levelIndex: 0, x: 12.815427843574504, z: -19.537295376163186, elevation: 2.8989999294281077 },
    ],
    id:          "4e107382-93c6-5da1-be10-7d3716908aac",
    name:        "toilets path",
  },
  "printers":         {
    coordinates: [
      { levelIndex: 0, x: 13.681799406234854, z: -30.869930024500356, elevation: 0.7020000024791742 },
      { levelIndex: 0, x: 27.718900453474195, z: -28.969198515733176, elevation: 0.0020000000949949026 },
      { levelIndex: 0, x: 33.355348932996975, z: -30.730078700672635, elevation: 0.18647058823529505 },
      { levelIndex: 1, x: 36.48067322848648, z: -31.944549524821387, elevation: 2.161036882169064 },
      { levelIndex: 1, x: 37.54393703085509, z: -34.18274169416093, elevation: 2.8990001678466797 },
    ],
    id:          "883b709b-4b08-559e-bb69-54ed75da2b13",
    name:        "printers path",
  },
}
