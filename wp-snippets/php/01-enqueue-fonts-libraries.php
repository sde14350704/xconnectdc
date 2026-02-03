<?php
/**
 * WPCode Snippet: Enqueue Fonts and Libraries
 * Type: PHP Snippet
 * Location: Run Everywhere
 * Priority: 1
 * 
 * Description: Enqueues Google Fonts (Inter) and AOS (Animate On Scroll) library from CDN.
 * Runs on wp_enqueue_scripts hook.
 */

function xconnect_enqueue_fonts_and_libraries() {
    // Enqueue Google Fonts - Inter
    wp_enqueue_style(
        'xconnect-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );
    
    // Enqueue AOS CSS
    wp_enqueue_style(
        'xconnect-aos',
        'https://unpkg.com/aos@2.3.1/dist/aos.css',
        array(),
        '2.3.1'
    );
    
    // Enqueue AOS JS
    wp_enqueue_script(
        'xconnect-aos-js',
        'https://unpkg.com/aos@2.3.1/dist/aos.js',
        array(),
        '2.3.1',
        true
    );
}
add_action('wp_enqueue_scripts', 'xconnect_enqueue_fonts_and_libraries');
