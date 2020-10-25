import React, { useEffect, memo, useRef } from "react";
import StyledT9 from "./styled";
import { letterPredictions } from "./utils/letterPredictions";
import { T9Props } from "./types";
import Icon from "../Icon";
import { arrowRight } from "../../icons/arrow-right";
import { arrowLeft } from "../../icons/arrow-left";

const T9: React.FC<T9Props> = memo(({ inputValue, onSelect }: T9Props) => {
    const [predictions, setPredictions] = React.useState([]);
    const [hasMorePredictions, setHasMorePredictions] = React.useState(false);
    const ScrollbarRef = useRef<null | HTMLElement>(null);

    useEffect(() => {
        const predictions = letterPredictions(inputValue);
        setPredictions(predictions);
    }, [inputValue]);

    useEffect(() => {
        if (isScrollbarVisible(ScrollbarRef)) {
            setHasMorePredictions(true);
        } else {
            setHasMorePredictions(false);
        }
    }, [predictions]);

    const isScrollbarVisible = (scrollbarRef: any) => {
        if (!scrollbarRef) {
            return false;
        }

        const scrollbarElement = scrollbarRef.current;

        return scrollbarElement.scrollWidth > scrollbarElement.clientWidth ? true : false;
    }

    const scrollToRight = () => {
        const scrollBarElement = ScrollbarRef.current;

        if (!scrollBarElement) {
            return;
        }

        scrollBarElement.scrollLeft += 20;
    }

    const scrollToLeft = () => {
        const scrollBarElement = ScrollbarRef.current;

        if (!scrollBarElement) {
            return;
        }

        scrollBarElement.scrollLeft -= 20;
    }

    return (
        <StyledT9 className="T9">
            <StyledT9.Scrollbar ref={ScrollbarRef}>
                {predictions.map(word => {
                    return (
                        <StyledT9.Button key={word} onClick={() => onSelect(word)}>{word}</StyledT9.Button>
                    )
                })}
            </StyledT9.Scrollbar>
            {hasMorePredictions &&
                <>
                    < StyledT9.Icon onClick={scrollToLeft} style={{ left: 0, right: "inherit" }}>
                        <Icon svgPaths={arrowLeft} />
                    </StyledT9.Icon>
                    < StyledT9.Icon onClick={scrollToRight}>
                        <Icon svgPaths={arrowRight} />
                    </StyledT9.Icon>
                </>
            }
        </StyledT9 >
    );
});

export default T9;
