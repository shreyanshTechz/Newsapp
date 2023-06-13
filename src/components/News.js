import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'

const axios = require('axios');


export default function News(props) {
    const [articles, setarticles] = useState([]);
    let [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // articles = [{"source":{"id":"bbc-sport","name":"BBC Sport"},"author":"BBC Sport","title":"Shane Warne memorial - watch & follow updates","description":"Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.","url":"http://www.bbc.co.uk/sport/live/cricket/60916236","urlToImage":"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png","publishedAt":"2022-03-30T08:22:26.498888Z","content":"Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]

    //  document.title = `${props.category}-NewsRoom`;

    const runCode = async () => {


        var axios = require('axios');
        var data = JSON.stringify({
            "code": `public class program{
                    public static void main(String [] args){
                        System.out.println(5+5+6);
                      }
                    }`,
            "language": "java",
            "input": ""
        });

        var config = {
            method: 'post',
            url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const updateNews = async (pageNo) => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9babd15bb8c44f4591be77366ec9d0f9&page=${page}&pageSize=6`;
        loading = true;
        let data = await fetch(url);
        let parsedData = await data.json()

        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false);

        // setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        props.setProgress(100);
    }


    useEffect(() => {
        updateNews();
        runCode();
    }, [])

    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9babd15bb8c44f4591be77366ec9d0f9&pageSize=6`;
    //     loading = true;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()

    //     setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults, loading: false })
    // }

    const fetchMoreData = async () => {
        setpage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9babd15bb8c44f4591be77366ec9d0f9&page=${page}&pageSize=6`;
        loading = true;
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        // setState({ articles: articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false });
    }






    return (
        <div className='container my-3'><h2 className='text-center' style={{ margin: '30px', marginTop: '90px' }}>Top {props.category} Headlines</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            ><div className="container">
                    <div className="row">
                        {articles.map((Element) => {
                            return <div className="col-md-4" key={Element.url}>
                                <NewsItem title={Element.title ? Element.title.slice(0, 45) : ""} description={Element.description ? Element.description.slice(0, 188) : ""} imageUrl={Element.urlToImage ? Element.urlToImage : "https://ph-files.imgix.net/c8b31621-bfa1-4169-9b94-d54a56fa35e2.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=503&h=380&fit=max&dpr=2"} newsurl={Element.url} Author={Element.author} date={Element.publishedAt} />
                            </div>
                        })}</div></div></InfiniteScroll>
            {/* </div></InfiniteScroll> */}
            {/* <div className="justify-content-between d-flex my-4">
                    <button disabled={page <= 1} type="button" onClick={handleprev} className="btn btn-dark">&larr;Previous</button>
                    <button type="button" onClick={handlenext} disabled={page + 1 > Math.ceil(totalArticles / 6)} className="btn btn-dark mx-5">Next&rarr;</button>
                </div> */}
        </div>
    )
}

