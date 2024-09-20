import type {DetailedHTMLProps, HTMLAttributes} from 'react';
import {makeClassName} from './textUtil';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type TitleProps = TextProps & {
  numberOfLines?: number;
};

export const Title = ({className: _className, numberOfLines, ...props}: TitleProps) => {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

export type SubtitleProps = TitleProps & {};
export const Subtitle = ({
  className: _className,
  numberOfLines,
  ...props
}: SubtitleProps) => {
  const className = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

export type SummaryProps = SubtitleProps & {};
export const Summary = ({
  className: _className,
  numberOfLines,
  ...props
}: SummaryProps) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};

export type ParagraphProps = SummaryProps & {};
export const Paragraph = ({
  className: _className,
  numberOfLines,
  ...props
}: ParagraphProps) => {
  const className = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines
  );
  return <p {...props} className={className} />;
};
