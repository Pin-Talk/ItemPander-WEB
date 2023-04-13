import './globals.css';

export const metadata = {
  title: 'Item Pander',
  description: 'Item Pander 페이지 입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
