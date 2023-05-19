

function NewsAticleList({ article }) {
    return (
        <div>
            List of News Articles
            {article.map((aricales) => {
                return (
                    <div key={aricales.id}>
                        {aricales.id}{aricales.title}{aricales.category}
                    </div>
                )
            })}
        </div>
    )
}

export default NewsAticleList

export async function getServerSideProps() {
    const responce = await fetch('http://localhost:4000/news')
    const data = await responce.json()
    console.log(data);


    return {
        props: {
            article: data,
        }
    }
}


