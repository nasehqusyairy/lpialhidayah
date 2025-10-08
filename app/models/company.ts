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
    { label: 'STAI', logo: logoStai, href: '#' },
    { label: 'MA', logo: logoMa, href: '#' },
    { label: 'SMP', logo: logoSmp, href: '#' },
    { label: 'TPQ', logo: logoTpq, href: '#' },
    { label: 'Madin', logo: logoMadin, href: '#' },
    { label: 'Mahad', logo: logoMahad, href: '#' },
]
