import React, {useEffect, useState, FC} from 'react';
import ReactPaginate from "react-paginate";
import style from './Card.module.css';
import {getCards} from '../../services/dataAPI';
import {ICard, IRouteProps} from '../../services/types';
import Player from "../../pages/textbook/Player/Player";

const Card: FC<IRouteProps> = (routeProps) => {
    const {cardGroupId, groupPage, level} = routeProps;

    const [cards, setCards] = useState<ICard[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);

    const getCardsAssign = (group: number, page: number) => {
        getCards(group, page).then((result) => {
            setCards(result);
            setPageCount(30);
        });
    }
    useEffect(() => {
        getCardsAssign(cardGroupId, groupPage);
    }, [cardGroupId, groupPage, level]);

    const HandlerPageClick: any = (event: any) => {
        getCardsAssign(cardGroupId, event.selected);
    }

    return (
        <>
        <div className={style.cards}>
            {
                cards.map((item) => (
                        <div className={`${style.container} card-container-${level}`} key={item.id}>
                            <div className={style.header}
                                 style={{backgroundImage: `url("https://rss-words-3.herokuapp.com/${item.image}")`}}>
                                <div className={`${style.overlay} card-overlay-${level}`}>
                                    <div className={style.primary}>
                                        <h3>{item.word}</h3>
                                    </div>
                                    <div className={style.translate_block}>
                                        <span>{item.wordTranslate}</span>
                                        <span>{item.transcription}</span>
                                        <div>
                                            <Player url = {`https://rss-words-3.herokuapp.com/${item.audio}`}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.content}>
                                <div className={style.word_block}>
                                    <div dangerouslySetInnerHTML={{__html: item.textMeaning}}/>
                                    <div className={style.word_example}>{item.textMeaningTranslate}</div>
                                </div>
                                <div className={style.word_block}>
                                    <div dangerouslySetInnerHTML={{__html: item.textExample}}/>
                                    <div className={style.word_example}>{item.textExampleTranslate}</div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
                <ReactPaginate
                    previousLabel="<<"
                    nextLabel=">>"
                    breakLabel="..."
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={HandlerPageClick}
                    containerClassName="z-0 relative flex rounded-md shadow-sm -space-x-px justify-center py-10"
                    pageLinkClassName="z-10 relative bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    previousLinkClassName="z-10 relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    nextLinkClassName="z-10 relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    breakLinkClassName="z-10 relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                    activeClassName="z-20 relative bg-indigo-300 border-indigo-500 text-indigo-600 items-center border text-sm font-medium"
                />
        </>
    );
};

export default Card;
