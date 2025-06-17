
import { Header } from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Next JS Completo',
  description: 'Projeto testando os principais recursos do Next JS',
  openGraph: { // Tag para criar resumo em compartilhamento em redes sociais
    title: 'Next JS Completo',
    description: 'Projeto testando os principais recursos do Next JS',
    // images: ['SRC_DA_IMAGEM_PARA_SER_MINIATURA']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
