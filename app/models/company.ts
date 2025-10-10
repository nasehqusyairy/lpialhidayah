import logoStai from '~/images/logo-stai.webp'
import logoMahad from '~/images/logo-mahad.webp'
import logoMa from '~/images/logo-ma.webp'
import logoTpq from '~/images/logo-tpq.webp'
import logoSmp from '~/images/logo-smp.webp'
import logoMadin from '~/images/logo-madin.webp'

export type Company = {
    label: string
    logo: string
    href: string
}

export const companies: Company[] = [
    { label: 'STAI', logo: logoStai, href: 'https://staialmannan.ac.id' },
    { label: 'MA', logo: logoMa, href: 'https://ma.lpialhidayah.or.id' },
    { label: 'SMP', logo: logoSmp, href: 'https://smpt.lpialhidayah.or.id' },
    { label: 'TPQ', logo: logoTpq, href: 'https://tpq.lpialhidayah.or.id' },
    { label: 'Madin', logo: logoMadin, href: 'https://madin.lpialhidayah.or.id' },
    { label: 'Mahad', logo: logoMahad, href: 'https://mahad.lpialhidayah.or.id' },
]
