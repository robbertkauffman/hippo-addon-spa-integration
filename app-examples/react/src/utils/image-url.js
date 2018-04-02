import { baseUrls } from '../env-vars';
import jsonpointer from 'jsonpointer';

export function getImageProperties(imageRef, pageModel) {
  let imageProps;

  // get image reference
  let imageUuid;
  if (imageRef || imageRef.$ref) {
    imageUuid = imageRef.$ref
  }

  // get serialized image via reference
  let image;
  if (imageUuid && (typeof imageUuid === 'string' || imageUuid instanceof String)) {
    image = jsonpointer.get(pageModel, imageUuid);
  }

  if (image) {
    imageProps = {
      url: null,
      height: null,
      width: null
    };

    // build URL
    if (image._links && image._links.site && image._links.site.href) {
      imageProps.url = baseUrls.cmsBaseUrl + image._links.site.href;
    }

    // get height of image
    if (image.original && image.original.height) {
      imageProps.height = image.original.height;
    }

    // get width of image
    if (image.width && image.original.width) {
      imageProps.width = image.original.width;
    }
  }

  return imageProps;
}