import {PortableText} from '@portabletext/react';
import blockComponents from './blockComponents';

const DetailPortableContent = ({ body }: { body: any}) => {
  return (
    <PortableText value={body} components={blockComponents} />
  )
}

export default DetailPortableContent;

