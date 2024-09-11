'use client';

import { usePathname } from 'next/navigation';
import NavBar from '../navBar/NavBar'

export default function ConditionalNavBar() {
  const pathname = usePathname();

  // Passe une prop pour le style de NavBar
  const isHome = pathname === '/';

  return <NavBar isHome={isHome} />;
}