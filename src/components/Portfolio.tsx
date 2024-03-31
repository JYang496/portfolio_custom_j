import React, {useEffect, useState} from "react";
import {items} from "../data/items";

export const Portfolio = () => {

    const ITEMSPERPAGE = 5
    const [portfolioSelect,setPortfolioSelect] = useState('portfolio-item')
    const [filterItems, setFilterItems] = useState(items)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentItems, setCurrentItems] = useState(items)
    const [maxPage, setMaxPage] = useState(1)
    const [toPage, setToPage] = useState<number>(1)

    useEffect(()=>{
        const filtered = items
            .filter(function (item) {
                return portfolioSelect === "portfolio-item" ? item.filterType !== null : item.filterType === `${portfolioSelect}`
            })
        setFilterItems(filtered)
        setCurrentPage(1)
        setMaxPage(Math.ceil(filtered.length/ITEMSPERPAGE))
    },[portfolioSelect])

    useEffect(()=>{
        setCurrentItems(filterItems.slice((currentPage-1) * ITEMSPERPAGE, Math.min((currentPage-1) * ITEMSPERPAGE+ITEMSPERPAGE, filterItems.length)))
    },[currentPage,filterItems])

    const PortfolioItem = (e: any) =>{
        return <div className={`portfolio-item ${e.filterType}`}>
            <div className="portfolio-wrap">
                <a href={`${e.linkTo}`} title="More Details">Title Sample: {e.title}</a>
            </div>
        </div>
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let pageNum = event.target.value ? parseInt(event.target.value) : 1;
        pageNum = Math.max(1,Math.min(maxPage,pageNum));
        setToPage(pageNum)
    }

    function onSelectFilter(type:string = 'portfolio-item') {
        setPortfolioSelect(type)
    }

    function onNextPage() {
        if (1 <= currentPage && currentPage < maxPage) setCurrentPage(currentPage+1)
    }

    function onLastPage() {
        if (1 < currentPage && currentPage <= maxPage) setCurrentPage(currentPage-1)
    }

    function jumpToPage(toPage:number) {
        if (1 <= toPage && toPage <= maxPage) setCurrentPage(toPage)
        setToPage(1)
    }

    return <>
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li className={portfolioSelect==='portfolio-item' ? `filter-active` : ''} onClick={()=>{onSelectFilter()}}>All</li>
                            <li className={portfolioSelect==='filter-app' ? `filter-active` : ''} onClick={()=>{onSelectFilter("filter-app")}}>App</li>
                            <li className={portfolioSelect==='filter-card' ? `filter-active` : ''} onClick={()=>{onSelectFilter("filter-card")}}>Card</li>
                            <li className={portfolioSelect==='filter-web' ? `filter-active` : ''} onClick={()=>{onSelectFilter("filter-web")}}>Web</li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                    {currentItems
                        .map((item, index) => (
                            <PortfolioItem key={index} filterType={item.filterType} title={item.title} linkTo={item.linkTo} />
                        ))}
                </div>
                <div className="pagination justify-content-center">
                    <div className="page-button p-3" onClick={()=>{onLastPage()}}><i className="bi bi-arrow-bar-left"></i></div>
                    <div className="p-3">
                        {currentPage}/{maxPage}
                    </div>
                    <div className="jump-to d-flex p-3">
                        <form onSubmit={()=>{jumpToPage(1)}}>
                            <label>
                                to:
                                <input type="number"
                                       min="1"
                                       max={maxPage}
                                       value={toPage}
                                       onChange={handleChange}
                                />
                            </label>
                        </form>
                        <div className="page-button" onClick={()=>{jumpToPage(toPage)}}>Jump</div>
                    </div>
                    <div className="page-button p-3" onClick={()=>{onNextPage()}}><i className="bi bi-arrow-bar-right"></i></div>
                </div>

            </div>
        </section>
    </>

}
