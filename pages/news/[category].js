

function ArticaleListCategory({ articles, category }) {
    return (
        <div>
            <h1>showing news for catgory <i>{category}</i></h1>
            {articles.map((article) => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )


            })}
        </div>
    )
}

export default ArticaleListCategory
export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    console.log(query);
    // console.log(req.headers.cookie, 'gggggg');
    // res.setHeader('Set-Cookie', ['name=pramod'])
    // console.log(context.params);
    // console.log(params);
    const { category } = params


    return {
        props: {
            articles: data,
            category
        }
    }
}
