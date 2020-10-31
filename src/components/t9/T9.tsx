import React, { useEffect, memo, useRef } from "react";
import StyledT9 from "./styled";
import { letterPredictions } from "./utils/letterPredictions";
import { T9Props, ScrollDirection } from "./types";
import Icon from "../Icon";
import { arrowRight } from "../../icons/arrow-right";
import { arrowLeft } from "../../icons/arrow-left";

const SCROLL_STEP = 20;

const T9: React.FC<T9Props> = memo(({ inputValue, digitMapping, onSelect }: T9Props) => {
    const [predictions, setPredictions] = React.useState<string[]>([]);
    const [hasScrollbar, setHasScrollbar] = React.useState(false);
    const ScrollbarRef = useRef<null | HTMLElement>(null);

    useEffect(() => {
        const predictions = letterPredictions(inputValue, digitMapping);
        setPredictions(predictions);
    }, [inputValue, digitMapping]);

    useEffect(() => {
        if (isScrollbarVisible(ScrollbarRef)) {
            setHasScrollbar(true);
        } else {
            setHasScrollbar(false);
        }
    }, [predictions]);

    const isScrollbarVisible = (scrollbarRef: any) => {
        if (!scrollbarRef) {
            return false;
        }

        const scrollbarElement = scrollbarRef.current;

        return scrollbarElement.scrollWidth > scrollbarElement.clientWidth ? true : false;
    }

    const scroll = (direction: ScrollDirection = "right") => {
        const scrollBarElement = ScrollbarRef.current;

        if (!scrollBarElement) {
            return;
        }

        if (direction === "right") {
            scrollBarElement.scrollLeft += SCROLL_STEP;
        } else {
            scrollBarElement.scrollLeft -= SCROLL_STEP;
        }
    }

    return (
        <StyledT9 className="T9">
            <StyledT9.Scrollbar ref={ScrollbarRef}>
                {predictions.map(word => {
                    return (
                        <StyledT9.TextButton key={word} onClick={() => onSelect(word)}>{word}</StyledT9.TextButton>
                    )
                })}
            </StyledT9.Scrollbar>
            {hasScrollbar &&
                <>
                    < StyledT9.Icon onClick={() => scroll("left")} style={{ left: 0, right: "inherit" }}>
                        <Icon svgPaths={arrowLeft} title="See previous" />
                    </StyledT9.Icon>
                    < StyledT9.Icon onClick={() => scroll("right")}>
                        <Icon svgPaths={arrowRight} title="See next" />
                    </StyledT9.Icon>
                </>
            }
        </StyledT9 >
    );
});

export default T9;
