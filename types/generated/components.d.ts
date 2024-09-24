import type { Struct, Schema } from '@strapi/strapi';

export interface PostSectionPostSec extends Struct.ComponentSchema {
  collectionName: 'components_post_section_post_secs';
  info: {
    displayName: 'post_sec';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    post_sec: Schema.Attribute.Blocks;
    post_pic: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'post-section.post-sec': PostSectionPostSec;
    }
  }
}
