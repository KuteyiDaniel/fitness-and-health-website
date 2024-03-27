import React, {useEffect, useState} from "react";
//import "@/css/components/text-writer.scss";
import '../scss/TextWriter.scss'
interface propTypes {
    onComplete?: () => void,
    words: string[],
    cursorColor?: string,
    writingSpeed?: number,
    className?: string,
    style?: object,
    cursorWidth?: number
}
const TextWriter  = ({ writingSpeed = 100,
                         onComplete,
                         cursorColor = "255, 255, 255",
                         words,
                         className,
                         style = {}, cursorWidth = 2
}:propTypes) => {


    const [visible, updateVisible] = useState<boolean>(false);
    const [word, updateWord] = useState<string>('');
    const [wordIndex, updateWordIndex] = useState<number>(0);
    const [reversed, updateReversed] = useState<boolean>(false);
    useEffect(() => {
        setTimeout(function () {
            setTimeout(function () {
              if (words.length > 1) {
                  if (wordIndex !== words.length -1) {
                      animateWords()
                  }
              } else {
                  animateWords()
              }
            }, 150)
            updateVisible(true);
        }, 100)
    }, []);


    useEffect(() => {
        if (wordIndex > 0) {
            animateWords()
        }
    }, [wordIndex])

    useEffect(() => {
        if (word) {
            let fullWord = words[wordIndex];
            let updatedWord:string = '';
            if (word.length < fullWord.length) {
                updatedWord = !reversed ? fullWord.slice(0, word.length+1) : word.slice(0, word.length-1);

                setTimeout(function () {
                    updateWord(updatedWord);
                    if (updatedWord === '' && reversed && wordIndex + 1 < words.length) {
                        updateReversed(false)
                        updateWordIndex(wordIndex + 1);
                    }
                }, writingSpeed)
            } else {
                if (wordIndex !== words.length-1) {
                    updateReversed(true);
                    setTimeout(function () {
                        updateWord(word.slice(0, word.length-1))
                    }, 500)
                } else {
                    if (onComplete) {
                        onComplete()
                    }
                }
            }


        }

    }, [word])

    function animateWords() {
        //console.log('Function called');
        updateWord(words[wordIndex][0])
    }


    let cursorStyleKey = '--cursor-style-color';
    let cursorWidthKey = '--cursor-width';

    return <>
        <div style={style as object} className={`writer-section${ visible ? ' section-visible' : ''}${ className ? " " + className : ""}`}>
                <h2 className={'writer-text'}>
                    <span className={'main-word'}>{
                        word.split(" ").map((wordItem: string, index: number) => {
                            return <span key={index}>{wordItem}</span>
                        })
                    }
                        <span style={{
                            [ cursorStyleKey ] : cursorColor,
                            [ cursorWidthKey ] : cursorWidth + "px"
                        }} className={'line-cursor'}></span>
                    </span>

                </h2>
        </div>
    </>
}

export default TextWriter
