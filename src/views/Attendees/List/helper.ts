export const links = [
  "#",
  "#",
  "#",
  "#",
  "#",
]

export const headers = [
  {
    header: '№',
    accessor: 'id',
    type: 'id'
  },
  {
    header: "Фото сурат",
    accessor: 'image',
    type: 'image'
  },
  {
    header: "Ф.И.Ш (унвони, лавозими)",
    accessor: 'full_info',
    type: 'name'
  },
  {
    header: "Кириш вақти",
    accessor: 'in_time',
    type: 'list'
  },
  {
    header: "Чиқиш вақти",
    accessor: 'out_time',
    type: 'list'
  },
  {
    header: "Кириш сони",
    accessor: 'in_count',
    type: 'count'
  },
  {
    header: "Чиқиш сони",
    accessor: 'out_count',
    type: 'count'
  },
  {
    header: "Ишда бўлган вақти",
    accessor: 'in_work_time',
    type: 'time'
  },
  {
    header: "Ишдан ташқарида бўлганвақти",
    accessor: 'out_work_time',
    type: 'id'
  },
  {
    header: "Хозирги вақтда",
    accessor: 'current_time',
    type: 'id'
  }
]
export const data = [
  {
    id: 1,
    image: require('../../../assets/images/1.jpeg'),
    full_info: 'КАТТА СЕРЖАНТ Азизов Нодир Комилович МУХАНДИС',
    in_time: ['09:00'],
    out_time: ['13:10'],
    in_count: 1,
    out_count: 1,
    in_work_time: '05:10:45',
    out_work_time: '-',
    current_time: 'yes',
  },
  {
    id: 2,
    image: require('../../../assets/images/2.jpeg'),
    full_info: 'КАТТА СЕРЖАНТ Жалилов Акром Саидович БОШ МУТАХАССИС',
    in_time: [
      '09:00',
      '10,15',
      '11:50'
    ],
    out_time: [
      "10:05",
      "11:35"
    ],
    in_count: 3,
    out_count: 3,
    in_work_time: '04:25:34',
    out_work_time: '01:12:55',
    current_time: 'yes',
  },
  {
    id: 3,
    image: require('../../../assets/images/3.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: [
      '09:00',
      '12:45'
    ],
    out_time: [
      '12:30',
      '13:50'
    ],
    in_count: 2,
    out_count: 3,
    in_work_time: '05:10:45',
    out_work_time: '02:19:22',
    current_time: 'no',
  },
  {
    id: 4,
    image: require('../../../assets/images/4.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: [
      '09:00',
      '12:45'
    ],
    out_time: [
      '12:30',
      '13:50'
    ],
    in_count: 2,
    out_count: 3,
    in_work_time: '05:10:45',
    out_work_time: '02:19:22',
    current_time: 'no',
  },
  {
    id: 5,
    image: require('../../../assets/images/5.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: [
      '09:00',
      '12:45'
    ],
    out_time: [
      '12:30',
      '13:50'
    ],
    in_count: 2,
    out_count: 3,
    in_work_time: '05:10:45',
    out_work_time: '02:19:22',
    current_time: 'no',
  },
  {
    id: 6,
    image: require('../../../assets/images/6.jpeg'),
    full_info: 'СЕРЖАНТ Абдукадиров Салим Ботиров МУХАНДИС',
    in_time: [
      '09:00',
      '12:45'
    ],
    out_time: [
      '12:30',
      '13:50'
    ],
    in_count: 2,
    out_count: 3,
    in_work_time: '05:10:45',
    out_work_time: '02:19:22',
    current_time: 'no',
  },
]