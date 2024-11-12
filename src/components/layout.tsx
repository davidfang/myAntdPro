import {
    PageContainer,
    ProLayout
  } from '@ant-design/pro-components';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ProLayout
                title="Ant Design Pro"
                logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            >
                <PageContainer>
                    {children}
                </PageContainer>
            </ProLayout>
        </>
    )
}