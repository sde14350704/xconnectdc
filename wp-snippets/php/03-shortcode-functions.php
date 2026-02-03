<?php
/**
 * WPCode Snippet: Shortcode Functions for Page Sections
 * Type: PHP Snippet
 * Location: Run Everywhere
 * Priority: 3
 * 
 * Description: Creates shortcodes for all major sections - hero, services, why-us, industries, CTA.
 * Usage: [xconnect_hero], [xconnect_services], [xconnect_why_us], etc.
 */

// Hero Section Shortcode
function xconnect_hero_shortcode($atts) {
    $atts = shortcode_atts(array(
        'title' => 'Reliable Data Center & Network Infrastructure Solutions',
        'subtitle' => 'Empowering enterprises with secure, scalable, and high-availability connectivity.',
        'cta_primary_text' => 'Explore Solutions',
        'cta_primary_url' => home_url('/services'),
        'cta_secondary_text' => 'Contact Us',
        'cta_secondary_url' => home_url('/contact'),
    ), $atts);
    
    ob_start();
    ?>
    <!-- Use HTML from html/sections/hero-section.html -->
    <section class="xconnect-hero" id="hero">
        <!-- Hero content here -->
        <div class="xconnect-container">
            <div class="xconnect-hero__content">
                <h1 class="xconnect-hero__title"><?php echo esc_html($atts['title']); ?></h1>
                <p class="xconnect-hero__subtitle"><?php echo esc_html($atts['subtitle']); ?></p>
                <div class="xconnect-hero__cta">
                    <a href="<?php echo esc_url($atts['cta_primary_url']); ?>" class="xconnect-btn xconnect-btn--primary xconnect-btn--lg">
                        <?php echo esc_html($atts['cta_primary_text']); ?>
                    </a>
                    <a href="<?php echo esc_url($atts['cta_secondary_url']); ?>" class="xconnect-btn xconnect-btn--outline-white xconnect-btn--lg">
                        <?php echo esc_html($atts['cta_secondary_text']); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}
add_shortcode('xconnect_hero', 'xconnect_hero_shortcode');

// Services Section Shortcode
function xconnect_services_shortcode() {
    ob_start();
    // Load from html/sections/services-section.html
    echo '<!-- Services section content -->';
    return ob_get_clean();
}
add_shortcode('xconnect_services', 'xconnect_services_shortcode');

// Why Us Section Shortcode
function xconnect_why_us_shortcode() {
    ob_start();
    // Load from html/sections/why-us-section.html
    echo '<!-- Why Us section content -->';
    return ob_get_clean();
}
add_shortcode('xconnect_why_us', 'xconnect_why_us_shortcode');

// Industries Section Shortcode
function xconnect_industries_shortcode() {
    ob_start();
    // Load from html/sections/industries-section.html
    echo '<!-- Industries section content -->';
    return ob_get_clean();
}
add_shortcode('xconnect_industries', 'xconnect_industries_shortcode');

// CTA Section Shortcode
function xconnect_cta_shortcode($atts) {
    $atts = shortcode_atts(array(
        'title' => 'Let\'s Build Your Digital Future Together',
        'subtitle' => 'Connect with our experts to discuss your infrastructure requirements.',
        'cta_text' => 'Get Started',
        'cta_url' => home_url('/contact'),
    ), $atts);
    
    ob_start();
    // Load from html/sections/cta-section.html
    echo '<!-- CTA section content -->';
    return ob_get_clean();
}
add_shortcode('xconnect_cta', 'xconnect_cta_shortcode');

// Header Shortcode
function xconnect_header_shortcode() {
    ob_start();
    // Load from html/header-component.html
    echo '<!-- Header component -->';
    return ob_get_clean();
}
add_shortcode('xconnect_header', 'xconnect_header_shortcode');

// Footer Shortcode
function xconnect_footer_shortcode() {
    ob_start();
    // Load from html/footer-component.html
    echo '<!-- Footer component -->';
    return ob_get_clean();
}
add_shortcode('xconnect_footer', 'xconnect_footer_shortcode');
