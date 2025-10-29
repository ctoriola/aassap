#!/usr/bin/env python3
"""
Batch Update Script for Phase 1: TVEE Website Content Enhancement
Updates all HTML pages with consistent TVEE-focused content
"""

import os
import re
from pathlib import Path

# Configuration
BASE_DIR = Path(__file__).parent
HTML_FILES = [
    'about.html', 'blog.html', 'contact.html', 'faq.html',
    'four-column.html', 'load-more.html', 'one-column.html',
    'portfolio.html', 'service.html', 'single-blog.html',
    'six-colum-full-wide.html', 'team.html', 'testimonial.html',
    'three-colum-sidbar.html', 'three-column.html', 'two-column.html'
]

# Global replacements
REPLACEMENTS = {
    # Phone numbers
    '+568925896325': '+2348000000000',
    '+5689 2589 6325': '+234 800 000 0000',
    
    # Email addresses
    'hello@archilux.com': 'contact@ssaptvee.gov.ng',
    
    # Addresses
    '121 King Street, Melbourne Victoria 3000 Australia': 
        'Office of SSAP-TVEE, Federal Secretariat Complex, Abuja, Nigeria',
    
    # Title replacements
    'Shared on THEMELOCK.COM -  About | Archilux': 
        'About Dr. Abiola Arogundade | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Service | Archilux': 
        'Programs & Services | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Contact | Archilux': 
        'Contact Us | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  FAQ | Archilux': 
        'FAQ | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Portfolio | Archilux': 
        'Programs & Initiatives | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Team | Archilux': 
        'Our Team | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Testimonial | Archilux': 
        'Success Stories | SSAP-TVEE',
    'Shared on THEMELOCK.COM -  Blog | Archilux': 
        'News & Updates | SSAP-TVEE',
    
    # Generic architecture content
    'We blend innovative architecture with refined interior': 
        'Empowering Nigerian youth through technical, vocational',
    'design to create spaces that inspire.': 
        'and entrepreneurship education for economic growth.',
    'Innovative architecture and refined interiors, crafted to': 
        'Technical, vocational & entrepreneurship programs driving',
    'inspire everyday living.': 
        'Nigeria\'s skills revolution and job creation.',
    'Get in touch to learn more about our architecture': 
        'Contact us to learn more about TVEE programs',
    'and interior design services.': 
        'and opportunities for youth empowerment.',
}

def update_file(filepath):
    """Update a single HTML file with Phase 1 content"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply all replacements
        for old_text, new_text in REPLACEMENTS.items():
            content = content.replace(old_text, new_text)
        
        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    
    except Exception as e:
        print(f"Error updating {filepath}: {e}")
        return False

def main():
    """Main execution function"""
    print("=" * 60)
    print("Phase 1 Batch Update Script - TVEE Website")
    print("=" * 60)
    print()
    
    updated_count = 0
    skipped_count = 0
    
    for html_file in HTML_FILES:
        filepath = BASE_DIR / html_file
        if filepath.exists():
            print(f"Processing: {html_file}...", end=" ")
            if update_file(filepath):
                print("✓ Updated")
                updated_count += 1
            else:
                print("- No changes needed")
                skipped_count += 1
        else:
            print(f"Warning: {html_file} not found")
            skipped_count += 1
    
    print()
    print("=" * 60)
    print(f"Summary:")
    print(f"  Files updated: {updated_count}")
    print(f"  Files skipped: {skipped_count}")
    print("=" * 60)
    print()
    print("✅ Phase 1 global updates complete!")
    print("Next: Run manual content updates for page-specific sections")

if __name__ == "__main__":
    main()
