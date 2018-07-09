import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

const Index = (props) => (
  <Layout>
    <h1>RuPaul's Drag Race</h1>
    <ul>
      {props.shows.map( ({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=rupauls-drag-race')
  const data = await res.json()

  console.log(`Show fetched data. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
