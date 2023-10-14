const HomePage = ({ params: { test } }) => {
  return (
    <>Home Page {test}</>
  )
}

export default HomePage

export const generateStaticParams = () => [{ test: 'test123' }]
export const dynamicParams = false
