import types from '../../../constants/action-types';

export const attendeesHeader = [
  {
    id: 1,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: '№',
    accessor: 'id'
  },
  {
    id: 2,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Фото сурат',
    accessor: 'images',
    type:'userV2'
  },
  {
    id: 3,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Ф.И.Ш (унвони, лавозими)',
    accessor: 'full_name'
  },
  {
    id: 4,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Вход Кириш вақти',
    accessor: 'in_time'
  },
  {
    id: 5,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'ВыходЧиқиш вақти',
    accessor: 'out_time'
  },
  {
    id: 6,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Кол-во входов Кириш сони (жами)',
    accessor: 'number_of_in'
  },
  {
    id: 7,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Кол-во выходов Чиқиш сони (жами)',
    accessor: 'number_of_out'
  },
  {
    id: 8,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Время на работе Ишда бўлган вақти',
    accessor: 'time_at_work'
  },
  {
    id: 9,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Время вне работы Ишдан ташқарида бўлганвақти',
    accessor: 'time_out_work'
  },
  {
    id: 10,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'На месте Хозирги вақтда',
    accessor: 'current',
    type: 'current'

  }
];

export const fullListHeader = [
  {
    id: 1,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: '№',
    accessor: 'id'
  },
  {
    id: 2,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Фото сурат',
    accessor: 'images',
    type:'userV2'
  },
  {
    id: 3,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Ф.И.Ш (рақами)',
    accessor: 'full_name'
  },
  {
    id: 4,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Эрталбки Текширув',
    accessor: 'morning_check',
    type:'checks'
  },
  {
    id: 5,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Умумий текширув 1',
    accessor: 'check_1',
    type:'checks'
  },
  {
    id: 6,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Умумий текширув 2',
    accessor: 'check_2',
    type:'checks'
  },
  {
    id: 7,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Умумий текширув 3',
    accessor: 'check_3',
    type:'checks'
  },
  {
    id: 8,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Умумий текширув 4',
    accessor: 'check_4',
    type:'checks'
  },
  {
    id: 9,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Текшируда бўлди (жами)',
    accessor: 'total_attendees',
    type: 'total'
  },
  {
    id: 10,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Текшируда бўлмади (жами)',
    accessor: 'total_absence',
    type: 'total_red'
  },
  {
    id: 11,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Канча вақт бўлмади',
    accessor: 'absence_hours'
  }
];
export const peopleHeader = [
  {
    id: 1,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: '№',
    accessor: 'id'
  },
  {
    id: 2,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Фото сурат',
    accessor: 'images',
    type:'userV2'
  },
  {
    id: 3,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Исми',
    accessor: 'first_name'
  },
  {
    id: 4,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Подразделение',
    accessor: 'avatar_image_id'
  },
  {
    id: 5,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Фамилияси',
    accessor: 'last_name'
  },
  {
    id: 6,
    align: 'end',
    disableSortBy: true,
    show: true,
    Header: 'Гурухи',
    accessor: 'list_id'
  }
];

export const genericTypes = [
  {
    key: types.ATTENDEES_HEADER,
    headerName: 'attendeesHeader'
  },
  {
    key: types.PEOPLE_HEADER,
    headerName: 'peopleHeader'
  },
  {
    key: types.FULL_LIST_HEADER,
    headerName: 'fullListHeader'
  }
];
