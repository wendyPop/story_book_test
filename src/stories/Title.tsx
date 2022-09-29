import React from 'react';

export interface TitleProps {
    /**
     * 보여주고 싶은 텍스트입니다
     */
    text?: string,
    backgroundColor?: string
}

/**
 * 타이틀 컴포넌트
 *
 * - 타이틀 컴포넌트입니다 오오오오오
 */
const Title = ({ text = '샘플 텍스트입니다.', backgroundColor = 'red'}: TitleProps) => {
    return <div style={{ backgroundColor }}>{ text }</div>
}

export default Title
