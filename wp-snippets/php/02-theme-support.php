<?php
/**
 * WPCode Snippet: Theme Support and Navigation Menus
 * Type: PHP Snippet
 * Location: Run Everywhere
 * Priority: 2
 * 
 * Description: Adds theme support for essential WordPress features and registers navigation menus.
 */

function xconnect_theme_support() {
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    
    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 45,
        'width'       => 180,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary'   => __('Primary Menu', 'xconnectdc'),
        'footer'    => __('Footer Menu', 'xconnectdc'),
        'mobile'    => __('Mobile Menu', 'xconnectdc'),
    ));
}
add_action('after_setup_theme', 'xconnect_theme_support');
