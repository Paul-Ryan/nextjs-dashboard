import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
});
export const lusitana = Lusitana({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you want to use
  variable: '--font-lusitana',
});
