# Regal Threads Experience

Build a complete, production-ready, premium Indian fashion e-commerce web application called “Regal Threads”.

The brand is focused on premium royal/event clothing for Men, Women, and Kids. The core brand idea is that when customers wear Regal Therads, they should feel like royalty at every event.

The website must NOT look like a generic clothing store or a standard Shopify template. It should feel like a luxury Indian fashion house inspired by Maharajas, Maharanis, royal palaces, Indian craftsmanship, weddings, celebrations, and modern luxury fashion.

The experience should communicate:

“Don’t just attend the occasion. Rule it.”

Use this concept throughout the UI, visual design, product presentation, animations, and marketing copy.

1. TECH STACK

Build the application using:

React

TypeScript

Vite

Tailwind CSS

shadcn/ui

Framer Motion for animations

Supabase for backend

PostgreSQL database

Supabase Authentication

Supabase Storage for product/banner images

Create a clean, scalable, component-based architecture.

Do not use mock-only frontend state for core e-commerce functionality. Connect the application to Supabase for products, users, cart, wishlist, orders, inventory, coupons, reviews, banners, and other persistent data.

2. BRAND IDENTITY

Brand

Regal Threads

Use the exact spelling “Regal Therads” everywhere.

Do not automatically change it to “Regal Threads”.

Brand Personality

The brand should feel:

Royal

Premium

Elegant

Sophisticated

Indian

Powerful

Traditional

Modern

Exclusive

Confident

Brand Concept

Regal Threads is not simply selling clothes.

It is selling the feeling of:

“I am the king or queen of this occasion.”

Use premium microcopy such as:

“Dress Like Royalty.”

“Made for Your Grand Entrance.”

“Where Tradition Meets Royalty.”

“Your Moment. Your Crown.”

“Wear the Occasion.”

“Don’t Just Attend. Rule It.”

“Royal Looks for Royal Moments.”

Do not overuse these phrases. Keep the copy elegant and premium.

3. VISUAL DESIGN

Create a luxurious Indian royal + modern glassmorphism design.

The website should feel inspired by:

Indian royal palaces

Maharajas

Maharanis

Royal weddings

Traditional Indian craftsmanship

Luxury fashion editorials

Gold ornaments

Palace architecture

Premium fabrics

Modern luxury brands

Color Direction

Use a sophisticated palette:

Deep black

Charcoal

Royal burgundy

Deep emerald

Antique gold

Warm ivory

Gold should be an accent color and should NOT dominate the interface.

Use subtle gradients, glow effects, glass surfaces, and premium borders.

Glassmorphism

Use glassmorphism for:

Navbar

Product cards

Filters

Category cards

Floating actions

Modals

Cart drawer

Account panels

Admin dashboard cards

Use:

backdrop blur

semi-transparent backgrounds

subtle borders

soft shadows

elegant highlights

Do not make everything transparent. Maintain excellent readability and visual hierarchy.

4. TYPOGRAPHY

Use a premium serif font for major headings and an elegant modern sans-serif font for UI and body content.

Large headings should feel like luxury fashion editorial typography.

Example:

THE ROYAL COLLECTION

Made for Your Grand Entrance

Maintain consistent typography across the entire application.

5. GLOBAL NAVIGATION

Desktop Header

Create a premium sticky/glass navbar.

Left:

Regal Threads logo

Center navigation:

Men

Women

Kids

Collections

New Arrivals

Offers

Right:

Search

Wishlist

Account

Cart

The header should become slightly more compact when scrolling.

Mobile Header

Create a mobile-friendly header with:

Regal Threads logo

Search icon

Wishlist

Cart

Hamburger menu

Also create a fixed mobile bottom navigation:

Home

Categories

Search

Wishlist

Account

6. HOME PAGE

Create a visually impressive luxury fashion homepage.

Hero Section

Use a full-width cinematic fashion hero section.

Show premium Indian royal/event fashion.

Headline:

“Dress Like Royalty.”

Supporting text:

“Timeless Indian fashion crafted for the moments where you deserve to rule.”

Buttons:

Shop Collection

Explore Royal Collection

Use subtle entrance animations.

Hero image should feel like a luxury fashion campaign rather than a generic product image.

7. HOMEPAGE SECTIONS

Create the following sections in this order:

1. Hero

Premium royal fashion campaign.

2. Featured Offers

Show current offers in elegant glass cards.

3. Shop By Category

Three large premium cards:

Men

Women

Kids

Each should use premium Indian fashion imagery.

4. Royal Collections

Show collections such as:

Maharaja Collection

Maharani Collection

Little Maharaja

Little Maharani

Wedding Royalty

Festive Royalty

5. New Arrivals

Display modern product cards.

6. Best Sellers

Display best-selling products.

7. Wedding Collection

Large editorial banner promoting wedding clothing.

8. Festive Collection

Large editorial banner promoting festive clothing.

9. Limited Edition

Premium dark section emphasizing exclusivity.

10. Customer Reviews

Display elegant review cards.

11. WhatsApp Shopping

Create a prominent section:

“Found Your Royal Look?”

CTA:

Order on WhatsApp

12. Newsletter

Premium newsletter signup.

13. Footer

Complete luxury footer.

8. MEN CATEGORY

Create a dedicated Men category page.

Categories:

Sherwanis

Kurta Sets

Indo-Western

Bandhgala

Nehru Jackets

Wedding Collection

Festive Collection

Maharaja Collection

Use premium product cards.

9. WOMEN CATEGORY

Create a dedicated Women category page.

Categories:

Lehengas

Sarees

Anarkali

Sharara

Gharara

Designer Suits

Wedding Collection

Festive Collection

Maharani Collection

10. KIDS CATEGORY

Create a dedicated Kids category page.

Categories:

Kids Sherwani

Kids Kurta Sets

Kids Lehengas

Kids Indo-Western

Little Maharaja

Little Maharani

Wedding Collection

Festive Collection

11. SHOP / PRODUCT LISTING PAGE

Create a modern product listing page.

Include:

Breadcrumb

Page title

Product count

Search

Filters

Sorting

Product grid

Filters:

Category

Collection

Size

Color

Price

Occasion

Fabric

Availability

Discount

Rating

Sorting:

Recommended

Newest

Popular

Price Low to High

Price High to Low

Highest Rated

Biggest Discount

Desktop should have a sidebar filter.

Mobile should use a bottom-sheet filter interface.

12. PRODUCT CARD

Create premium product cards.

Each card should show:

Product image

Wishlist heart

Product name

Category

Rating

Price

MRP

Discount

Available colors

Quick Add / Select Options

Hover effects:

Image transition

Slight scale

Glass overlay

Quick action buttons

Do not make animations excessive.

13. PRODUCT DETAILS PAGE

Create a premium product detail experience.

Left side:

Large product image gallery.

Features:

Multiple images

Thumbnail navigation

Image zoom

Smooth transitions

Right side:

Product name

Rating

Review count

MRP

Selling price

Discount

Short description

Color selector

Size selector

Size guide

Stock availability

Fabric

Occasion

Delivery information

Care instructions

SKU

Buttons:

Add to Wishlist

Add to Cart

Buy Now

Order on WhatsApp

Make Buy Now and Add to Cart visually prominent.

On mobile, create a sticky bottom purchase bar.

14. SIZE GUIDE

Create a reusable size guide modal.

Support:

S

M

L

XL

XXL

Custom size information where applicable

The size guide should be easy to access from product pages.

15. WISHLIST

Authenticated users can:

Add product

Remove product

Move product to cart

View saved products

See unavailable products

Wishlist should persist in Supabase.

If an unauthenticated user attempts to save a product, ask them to log in/signup.

16. CART

Create a premium cart drawer and full cart page.

Show:

Product image

Product name

Size

Color

Quantity

Price

Discount

Remove

Move to Wishlist

Price summary:

Subtotal

Product discount

Coupon discount

Delivery

Final total

CTA:

Proceed to Checkout

17. CHECKOUT

Create a multi-step but simple checkout experience.

Steps:

Customer Information

Delivery Address

Order Summary

Coupon

Payment Method

Place Order

Customer information:

Full name

Mobile number

Email

Address:

House/address

City

State

Pincode

Initial payment method:

Cash on Delivery

Make COD clearly visible.

After successful order creation, show a premium confirmation screen:

“Your Royal Order Has Been Placed.”

Display:

Order ID

Order amount

Delivery address

Expected delivery

Track Order button

Continue Shopping button

18. WHATSAPP ORDERING

Implement WhatsApp ordering.

Every product should have:

Order on WhatsApp

Generate a pre-filled WhatsApp message containing:

Regal Therads

Product name

SKU

Size

Color

Quantity

Price

Example message:

“Hello Regal Threads, I would like to order:

Product: Royal Sherwani
Size: L
Color: Ivory
Quantity: 1
Price: ₹XX,XXX”

Use a configurable WhatsApp business number stored through environment/configuration rather than hardcoding it in multiple components.

Also add WhatsApp CTA on:

Homepage

Product page

Cart

Contact section

19. AUTHENTICATION

Use Supabase Authentication.

Implement:

Signup

Login

Logout

Forgot Password

Password Reset

Create a premium login/signup interface matching the Regal Therads design.

Account dashboard should contain:

Profile

Addresses

Wishlist

Orders

Reviews

Account Settings

20. ORDER TRACKING

Create an attractive order tracking timeline.

Statuses:

Order Placed

Confirmed

Processing

Shipped

Out for Delivery

Delivered

Show:

Order ID

Date

Products

Quantity

Size

Color

Total amount

Payment method

Delivery address

Current status

Tracking information

21. COUPONS

Implement coupon functionality.

Coupon fields:

Code

Discount type

Percentage/fixed discount

Minimum order amount

Maximum discount

Start date

Expiry date

Usage limit

Per-user usage limit

Active/inactive

Validate coupons securely on the backend.

Show clear messages:

Coupon applied

Invalid coupon

Expired coupon

Minimum order not reached

Coupon usage limit reached

22. PRODUCT REVIEWS

Customers can review purchased products.

Review:

1–5 stars

Written review

Optional image

Display:

Average rating

Total reviews

Rating distribution

Customer reviews

Verified Purchase badge

Only allow customers to submit reviews for products they purchased.

Admin can:

Approve

Hide

Delete reviews

23. ADMIN PANEL

Create a completely separate protected admin dashboard.

Admin UI should still follow the Regal Threads premium design language but prioritize usability.

Dashboard

Display:

Total Revenue

Total Orders

Total Customers

Total Products

Pending Orders

Delivered Orders

Low Stock

Best Sellers

Include charts for:

Revenue

Orders

Product performance

24. ADMIN PRODUCT MANAGEMENT

Admin can:

Add product

Edit product

Delete product

Publish/unpublish

Upload multiple images

Set category

Set collection

Set price

Set MRP

Set discount

Set sizes

Set colors

Set stock

Set SKU

Set fabric

Set occasion

Set description

Mark bestseller

Mark featured

Mark new arrival

Create a powerful product creation/edit form.

25. INVENTORY MANAGEMENT

Implement variant-level inventory.

Example:

Royal Sherwani:

S / Ivory = 5
M / Ivory = 8
L / Ivory = 6
XL / Ivory = 3

S / Black = 3
M / Black = 4
L / Black = 5
XL / Black = 2

Admin should be able to manage inventory by:

Size

Color

Variant

Show low-stock alerts.

Automatically prevent customers from purchasing unavailable variants.

26. ADMIN ORDER MANAGEMENT

Admin can:

View orders

Search orders

Filter orders

View customer information

View products

View amount

View payment method

Update order status

Add tracking information

Cancel orders

Order status updates must reflect on the customer's order tracking page.

27. ADMIN COUPON MANAGEMENT

Admin can:

Create coupon

Edit coupon

Disable coupon

Delete coupon

Set discount

Set minimum amount

Set expiration

Set usage limits

28. ADMIN REVIEW MANAGEMENT

Admin can:

View reviews

Approve reviews

Hide reviews

Delete reviews

29. ADMIN HOMEPAGE/BANNER MANAGEMENT

Create CMS-style controls for:

Hero banners

Promotional banners

Offers

Featured collections

New arrivals

Best sellers

Seasonal campaigns

Admin should not need to modify code to change homepage banners.

30. SUPABASE DATABASE

Create the required database schema.

Tables should include:

profiles

categories

collections

products

product_images

product_variants

inventory

wishlists

wishlist_items

carts

cart_items

addresses

orders

order_items

coupons

coupon_usage

reviews

banners

admin_users

Create proper:

Primary keys

Foreign keys

Indexes

Timestamps

Constraints

Use Row Level Security.

Customers must only be able to access their own:

Profile

Addresses

Cart

Wishlist

Orders

Reviews

Admins should have appropriate permissions to manage products, inventory, orders, banners, coupons, and reviews.

31. IMAGE STORAGE

Use Supabase Storage for:

Product images

Product gallery images

Homepage banners

Collection images

Review images

Optimize images before display.

Use responsive image sizes and lazy loading.

32. SAMPLE DATA

Create realistic demo data for development.

Men:

Royal Ivory Sherwani

Maharaja Black Sherwani

Regal Wine Kurta Set

Imperial Bandhgala

Royal Indo-Western Set

Women:

Maharani Emerald Lehenga

Royal Burgundy Lehenga

Ivory Embroidered Anarkali

Regal Silk Saree

Royal Wedding Sharara

Kids:

Little Maharaja Sherwani

Little Prince Kurta Set

Little Maharani Lehenga

Royal Kids Indo-Western

Use realistic Indian prices in INR.

33. RESPONSIVE DESIGN

The application must be fully responsive.

Optimize for:

Mobile

Tablet

Laptop

Desktop

Large screens

Mobile experience must feel intentionally designed, not simply a desktop layout squeezed onto a phone.

Prioritize:

Fast loading

Touch-friendly controls

Large product images

Easy filters

Sticky purchase buttons

Mobile navigation

WhatsApp ordering

34. ANIMATIONS

Use Framer Motion for elegant animations.

Include:

Hero entrance

Scroll reveal

Product hover

Image transitions

Wishlist animation

Cart animation

Modal transitions

Page transitions

Button micro-interactions

Keep animations subtle, smooth, and premium.

Do not sacrifice performance.

35. SEO

Implement:

SEO-friendly URLs

Meta titles

Meta descriptions

Open Graph tags

Product structured data

Breadcrumbs

Sitemap

Robots.txt

Use:

Regal Threads — Premium Indian Royal Fashion

as the primary brand description.

36. SECURITY

Implement:

Supabase authentication

RLS

Protected admin routes

Secure backend operations

Input validation

Secure order creation

Protected customer data

Never expose Supabase service-role keys or other sensitive secrets in frontend code.

Use environment variables for secrets/configuration.

37. PERFORMANCE

Optimize for fast performance.

Implement:

Lazy-loaded images

Image optimization

Pagination where appropriate

Efficient Supabase queries

Caching where useful

Minimal unnecessary API calls

Optimized React components

Loading skeletons

Error states

Empty states

38. ERROR & LOADING STATES

Every important page should have:

Loading state

Skeleton UI

Empty state

Error state

Retry option where appropriate

Examples:

Empty wishlist:

“Your royal collection is waiting.”

Empty cart:

“Your royal journey begins with a single choice.”

39. FOOTER

Create a premium footer.

Display:

Regal Threads

“Where every occasion deserves a royal entrance.”

Links:

About

Contact

Men

Women

Kids

Collections

New Arrivals

Offers

Track Order

Shipping Policy

Return Policy

Privacy Policy

Terms & Conditions

Social:

Instagram

Facebook

WhatsApp

40. IMPORTANT UX RULES

The application must feel premium at every stage.

Do not:

Use generic e-commerce templates

Overuse gold

Use excessive animations

Use cluttered layouts

Use cheap-looking gradients

Use random icons

Use inconsistent spacing

Use inconsistent typography

Do:

Use generous whitespace

Use premium photography

Use elegant serif headings

Use subtle gold accents

Use sophisticated glassmorphism

Use smooth transitions

Maintain consistent spacing

Make product photography the visual focus

41. CORE CUSTOMER FLOW

Implement this complete flow:

Home
→ Category
→ Product Listing
→ Product Details
→ Select Size
→ Select Color
→ Add to Wishlist / Cart
→ Cart
→ Checkout
→ Customer Details
→ Address
→ Coupon
→ Cash on Delivery
→ Place Order
→ Order Confirmation
→ Order Tracking

Also support:

Home
→ Product
→ Order on WhatsApp
→ WhatsApp conversation

42. FINAL QUALITY REQUIREMENT

Before considering the project complete, verify:

All routes work

Authentication works

Supabase integration works

Products load from database

Product variants work

Inventory updates correctly

Wishlist works

Cart works

Checkout works

COD orders are created correctly

WhatsApp ordering works

Coupons work

Reviews work

Order tracking works

Admin authentication works

Admin product management works

Admin inventory management works

Admin order management works

Admin banner management works

Mobile layout works

Desktop layout works

Loading states work

Error states work

Empty states work

No broken links

No console errors

No exposed secrets

The final result should feel like a real premium Indian luxury fashion brand, not an AI-generated template.

The brand name Regal Therads must be prominently and consistently represented throughout the entire experience.

The final emotional impression should be:

REGAL THREADS

Dress Like Royalty.

Made for Your Grand Entrance.

Don’t Just Attend. Rule It.

- **Full ownership**: this code is yours. Push to `main` on GitHub.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
