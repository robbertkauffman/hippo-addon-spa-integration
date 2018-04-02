import React from 'react';
import { getImageProperties } from '../../utils/image-url';
import { parseAndRewriteLinks } from '../../utils/link-rewriter';

export default class Banner extends React.Component {
  render() {
    const content = this.props.content;
    const manageContentButton = this.props.manageContentButton;
    const image = getImageProperties(content.image, this.props.pageModel);

    let contentHtml;
    if (content.content && content.content.value) {
      contentHtml = parseAndRewriteLinks(content.content.value);
    }

    return (
      <div className="jumbotron has-edit-button">
        { manageContentButton && manageContentButton }
        { content.title &&
          <h1>{content.title}</h1>
        }
        { image &&
          <figure>
            <img src={image.url} alt={content.title} height={image.height} width={image.width}/>
          </figure>
        }
        { contentHtml && contentHtml }
        <p><a className="btn btn-primary btn-lg" href="#banner_link">Learn more</a></p>
      </div>
    );
  }
}