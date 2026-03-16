import Image from 'next/image'
import logo from '@/public/assets/icons/2922c0605f3ece2f6b093b1f8225600fa9586b11.png'
import logoWhite from '@/public/assets/icons/2922c0605f3ece2f6b093b1f8225600fa9586b11.png'
import logoAlt from '@/public/assets/icons/2922c0605f3ece2f6b093b1f8225600fa9586b11.png'

type prop = {
  className?: string
  variant?: 'default' | 'alt' | 'white'
}

export default function Logo({ className, variant = 'default' }: prop) {
  let logoSrc = logo

  if (variant === 'alt') {
    logoSrc = logoAlt
  } else if (variant === 'white') {
    logoSrc = logoWhite
  }

  return (
    <>
      <Image
        alt="icm-logo"
        src={logoSrc}
        className={`object-contain ${className}`}
        width={40}
        height={40}
        unoptimized
      />
    </>
  )
}
