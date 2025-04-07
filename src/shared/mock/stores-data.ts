export const dataset = [
    {
      feira: 59,
      loja_online: 57,
      loja_fisica_1: 86,
      loja_fisica_2: 21,
      month: 'JAN',
    },
    {
      feira: 50,
      loja_online: 52,
      loja_fisica_1: 78,
      loja_fisica_2: 28,
      month: 'FEB',
    },
    {
      feira: 47,
      loja_online: 53,
      loja_fisica_1: 106,
      loja_fisica_2: 41,
      month: 'MAR',
    },
    {
      feira: 54,
      loja_online: 56,
      loja_fisica_1: 92,
      loja_fisica_2: 73,
      month: 'ABR',
    },
    {
      feira: 57,
      loja_online: 69,
      loja_fisica_1: 92,
      loja_fisica_2: 99,
      month: 'MAI',
    },
    {
      feira: 60,
      loja_online: 63,
      loja_fisica_1: 103,
      loja_fisica_2: 144,
      month: 'JUN',
    },
    {
      feira: 59,
      loja_online: 60,
      loja_fisica_1: 105,
      loja_fisica_2: 319,
      month: 'JUL',
    },
    {
      feira: 65,
      loja_online: 60,
      loja_fisica_1: 106,
      loja_fisica_2: 249,
      month: 'AGO',
    },
    {
      feira: 51,
      loja_online: 51,
      loja_fisica_1: 95,
      loja_fisica_2: 131,
      month: 'SET',
    },
    {
      feira: 60,
      loja_online: 65,
      loja_fisica_1: 97,
      loja_fisica_2: 55,
      month: 'OUT',
    },
    {
      feira: 67,
      loja_online: 64,
      loja_fisica_1: 76,
      loja_fisica_2: 48,
      month: 'NOV',
    },
    {
      feira: 61,
      loja_online: 70,
      loja_fisica_1: 103,
      loja_fisica_2: 25,
      month: 'DEC',
    },
  ];

export const dataStoreFull = [
  {
    name: 'LOJA ONLINE',
    value: 397500,
    color: '#3E70C9'
  },
  {
    name: 'FEIRA',
    value: 358500,
    color: '#20B9AE'
  },
  {
    name: 'LOJA FÍSICA 1',
    value: 180000,
    color: '#A567E2'
  },
  {
    name: 'LOJA FÍSICA 2',
    value: 264500,
    color: '#43B968'
  }
]
  
  export function valueFormatter(value: number | null) {
    return `${value}mil`;
  }