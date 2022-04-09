import Link from 'next/link'
import { Button } from '@mantine/core'
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Link href="/hello" passHref>
      <Button component="a">Next link button</Button>
    </Link>
  )
}

export default Home
