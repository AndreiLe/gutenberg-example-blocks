<?php

namespace Gutenberg\Example_Blocks;

function custom_block_category( $categories, $post ) {
  return array_merge(
    $categories,
    array(
      array(
        'slug' => 'my-custom-blocks',
        'title' => __( 'My Custom Blocks', 'my-custom-blocks' ),
      ),
    )
  );
}
add_filter( 'block_categories',  __NAMESPACE__ . '\custom_block_category', 10, 2);
