export const siteConfig = {
    theme: {
        colors: {
            primary: "#1a5632",
            secondary: "#d4a574",
            accent: "#d4af37",
            background: "#0a0a0a",
            surface: "#121212",
            text: "#f8f8f8",
        },
        layout: {
            radius: "0.5rem",
        },
        fonts: {
            display: "'Playfair Display', serif",
            body: "'Montserrat', sans-serif",
        }
    },
    global: {
        siteName: "MelaliBali",
        // Logo configuration - if logoUrl is empty/null, will fallback to siteName text
        logo: {
            url: "", // Path to logo image (e.g., "/logo.png" or "https://example.com/logo.png")
            alt: "MelaliBali Logo",
            height: 40, // Logo height in pixels for navbar
        },
        favicon: "", // Path to favicon (e.g., "/favicon.ico" or "/favicon.svg")
        navbar: {
            logoText: "MelaliBali",
            links: [
                { label: "Home", href: "/" },
                { label: "Packages", href: "/packages" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
            ]
        },
        footer: {
            copyright: "© 2026 MelaliBali. All rights reserved.",
            contact: "0895679077688"
        },
        whatsapp: "62895679077688",
        // SEO Configuration
        seo: {
            defaultTitle: "MelaliBali - Full Day Bali Tours & Cultural Experiences",
            titleTemplate: "%s | MelaliBali",
            defaultDescription: "Experience Bali with full-day curated tours. Authentic cultural immersion, breathtaking landscapes, and local expert guides. Book your Bali adventure today!",
            siteUrl: "https://melalibali.com",
            defaultImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2072&auto=format&fit=crop",
            twitterHandle: "@melalibali",
            locale: "en_US",
            type: "website",
        },
    },
    pages: {
        home: {
            hero: {
                title: "MELALIBALI",
                subtitle: "WANDER IN BALI",
                description: "Experience the magic of Bali with full-day curated tours, authentic cultural immersion, and breathtaking landscapes with local expert guides.",
                image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2072&auto=format&fit=crop",
                cta: [
                    { label: "Explore Full Day Tours", href: "/packages", variant: "primary" },
                    { label: "Bali Travel Guide", href: "/blog", variant: "outline" }
                ]
            },
            features: {
                title: "Why Choose MelaliBali for Your Balinese Journey",
                subtitle: "From sunrise to sunset, we offer complete full-day experiences with cultural immersion, sustainable practices, and authentic local insights.",
                stats: [
                    { value: "10k+", label: "Happy Travelers", icon: "Smile" },
                    { value: "12yrs", label: "Local Experience", icon: "BadgeCheck" },
                    { value: "30+", label: "Full Day Tours", icon: "MapPin" },
                ],
                cards: [
                    { title: "Full Day Experiences", description: "Comprehensive 8-12 hour tours covering multiple attractions with meals and transport included.", icon: "Clock" },
                    { title: "Local Balinese Guides", description: "Our guides are born and raised in Bali, offering deep cultural insights and hidden gems access.", icon: "Users" },
                    { title: "Sustainable Tourism", description: "We support local communities and practice eco-friendly tourism to preserve Bali's beauty.", icon: "Leaf" },
                ]
            },
            testimonials: {
                title: "What our travelers say about our full day tours",
                items: [
                    { name: "Sarah Mitchell", rating: 5, text: "The full day Ubud tour was incredible! We saw so much without feeling rushed.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
                    { name: "James Chen", rating: 5, text: "Perfectly organized 12-hour tour. Every detail was expertly handled.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
                    { name: "Emma Wilson", rating: 5, text: "The guide's knowledge made the long day fly by. So much culture in one day!", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
                ]
            },
            bookingSteps: {
                title: "Your full day Bali experience in 3 simple steps.",
                steps: [
                    { title: "Choose Your Full Day Tour", icon: "Compass" },
                    { title: "Customize Your Experience", icon: "Edit" },
                    { title: "Enjoy Your Day in Paradise", icon: "Sun" },
                ]
            }
        },
        about: {
            title: "About MelaliBali",
            subtitle: "Wander through Bali with local experts.",
            description: "Founded by Balinese locals in 2014, MelaliBali specializes in full-day immersive tours that showcase the authentic beauty of our island. We believe in respectful tourism that honors Balinese traditions while providing unforgettable full-day experiences.",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
            stats: [
                { label: "Years in Bali Tourism", value: "12+" },
                { label: "Full Day Tour Options", value: "30+" },
                { label: "Local Guides", value: "50+" }
            ]
        },
        blog: {
            title: "Bali Travel Blog",
            subtitle: "Culture, temples, food, hidden gems, and travel tips for Bali."
        },
        contact: {
            title: "Contact Us",
            description: "Let us help you plan your perfect full day Bali experience.",
            buttonText: "Chat on WhatsApp"
        }
    },
    tours: [
        {
            id: "1",
            slug: "ubud-full-cultural-immersion",
            title: "Ubud Full Cultural Immersion",
            subTitle: "Complete Cultural Day Experience",
            price: "Rp 1,850,000",
            rating: "4.9 (2.1k)",
            location: "Ubud, Bali",
            duration: "10 hours",
            image: "https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?q=80&w=2074&auto=format&fit=crop",
            description: "A comprehensive full-day cultural journey through Ubud's most iconic temples, rice terraces, traditional arts, and spiritual sites.",
            highlights: ["Sacred Monkey Forest", "Tegalalang Rice Terraces", "Tirta Empul Water Temple", "Traditional Dance Show", "Ubud Art Market", "Lunch at Local Warung"],
            featured: true,
            includes: ["Hotel Pickup/Dropoff", "Professional Guide", "All Entrance Fees", "Traditional Lunch", "Bottled Water"]
        },
        {
            id: "2",
            slug: "nusa-penida-island-escape",
            title: "Nusa Penida Island Escape",
            subTitle: "Full Day Island Adventure",
            price: "Rp 2,300,000",
            rating: "4.8 (1.8k)",
            location: "Nusa Penida, Bali",
            duration: "12 hours",
            image: "https://images.unsplash.com/photo-1552465011-b4e30bf7349d?q=80&w=2069&auto=format&fit=crop",
            description: "Explore Nusa Penida's breathtaking cliffs, beaches, and viewpoints in this full-day island adventure with snorkeling and lunch.",
            highlights: ["Kelingking Beach Viewpoint", "Angel's Billabong", "Broken Beach", "Crystal Bay Snorkeling", "Lunch with Ocean View", "Diamond Beach"],
            featured: true,
            includes: ["Fast Boat Tickets", "Island Transport", "Snorkeling Gear", "Lunch", "Guide", "Entrance Fees"]
        },
        {
            id: "3",
            slug: "east-bali-temple-discovery",
            title: "East Bali Temple Discovery",
            subTitle: "Spiritual & Scenic Full Day",
            price: "Rp 1,650,000",
            rating: "4.9 (1.6k)",
            location: "East Bali",
            duration: "9 hours",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop",
            description: "Discover East Bali's most sacred temples, traditional villages, and stunning coastline in this spiritual full-day journey.",
            highlights: ["Lempuyang Temple (Gates of Heaven)", "Tirta Gangga Water Palace", "Traditional Amed Village", "Virgin Beach Visit", "Local Coffee Tasting", "Traditional Lunch"],
            featured: true,
            includes: ["Private Transport", "Temple Sarong Rental", "Traditional Lunch", "Guide", "All Entrance Fees"]
        },
        {
            id: "4",
            slug: "north-bali-highlands-tour",
            title: "North Bali Highlands Tour",
            subTitle: "Cool Climate & Culture Day",
            price: "Rp 1,750,000",
            rating: "4.7 (1.4k)",
            location: "North Bali",
            duration: "10 hours",
            image: "https://images.unsplash.com/photo-1526392587636-9a0e8a0e5c6a?q=80&w=2070&auto=format&fit=crop",
            description: "Escape to Bali's cool northern highlands featuring waterfalls, volcanic lakes, traditional markets, and mountain temples.",
            highlights: ["Gitgit Waterfall", "Ulun Danu Beratan Temple", "Bedugul Traditional Market", "Wanagiri Hidden Hills", "Jatiluwih Rice Terrace View", "Coffee Plantation"],
            featured: true,
            includes: ["Hotel Transport", "Guide", "Lunch at Lakeside Restaurant", "Entrance Fees", "Coffee Tasting"]
        },
        {
            id: "5",
            slug: "west-bali-national-park",
            title: "West Bali National Park",
            subTitle: "Wildlife & Nature Full Day",
            price: "Rp 2,100,000",
            rating: "4.8 (980)",
            location: "West Bali",
            duration: "11 hours",
            image: "https://images.unsplash.com/photo-1550347526-8618ee80ff4e?q=80&w=2070&auto=format&fit=crop",
            description: "A full day exploring Bali's wild west including national park wildlife, mangrove forests, and pristine beaches.",
            highlights: ["Bali Barat National Park Safari", "Menjangan Island Snorkeling", "Mangrove Forest Canoeing", "Pulaki Temple Visit", "Local Seafood Lunch", "Deer Sanctuary"],
            featured: false,
            includes: ["National Park Fees", "Snorkeling Equipment", "Canoe Rental", "Seafood Lunch", "Wildlife Guide", "Transport"]
        },
        {
            id: "6",
            slug: "bali-south-coast-adventure",
            title: "Bali South Coast Adventure",
            subTitle: "Beaches & Cliffs Full Day",
            price: "Rp 1,550,000",
            rating: "4.8 (1.2k)",
            location: "South Bali",
            duration: "8 hours",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
            description: "Explore Bali's stunning southern coastline featuring famous beaches, dramatic cliffs, and cultural performances.",
            highlights: ["Uluwatu Temple & Cliffs", "Padang Padang Beach", "Jimbaran Bay Seafood Lunch", "GWK Cultural Park", "Kecak Fire Dance", "Dreamland Beach"],
            featured: false,
            includes: ["Transport", "Guide", "Seafood Lunch", "Performance Tickets", "Beach Facilities"]
        },
        {
            id: "7",
            slug: "bali-volcano-lake-tour",
            title: "Bali Volcano & Lake Tour",
            subTitle: "Volcanic Landscape Full Day",
            price: "Rp 1,950,000",
            rating: "4.9 (1.3k)",
            location: "Central Bali",
            duration: "12 hours",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop",
            description: "Witness Bali's volcanic majesty with sunrise trekking, hot springs, and lake adventures in this active day tour.",
            highlights: ["Mount Batur Sunrise Trek", "Volcanic Steam Cooking", "Lake Batur Boat Tour", "Natural Hot Springs", "Coffee Plantation Visit", "Volcanic Garden"],
            featured: true,
            includes: ["Early Hotel Pickup", "Trekking Guide", "Breakfast Cooked by Steam", "Hot Springs Entrance", "Lunch", "Safety Equipment"]
        },
        {
            id: "8",
            slug: "bali-art-village-tour",
            title: "Bali Art Village Tour",
            subTitle: "Traditional Crafts Full Day",
            price: "Rp 1,450,000",
            rating: "4.7 (890)",
            location: "Various Villages",
            duration: "9 hours",
            image: "https://images.unsplash.com/photo-1562887189-e5d078343de4?q=80&w=2074&auto=format&fit=crop",
            description: "Immerse yourself in Bali's artistic heritage visiting traditional craft villages and witnessing artisans at work.",
            highlights: ["Celuk Silver Village", "Mas Woodcarving Village", "Batuan Painting Village", "Sukawati Art Market", "Traditional Craft Workshop", "Local Artist Meet"],
            featured: false,
            includes: ["Transport", "Artisan Guide", "Workshop Participation", "Lunch", "Market Shopping Time"]
        },
        {
            id: "9",
            slug: "bali-culinary-heritage",
            title: "Bali Culinary Heritage",
            subTitle: "Food & Market Full Day",
            price: "Rp 1,650,000",
            rating: "4.9 (1.1k)",
            location: "Various Locations",
            duration: "8 hours",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop",
            description: "A gastronomic journey through Bali's traditional markets, cooking classes, and authentic local eateries.",
            highlights: ["Morning Market Visit", "Spice Garden Tour", "Traditional Cooking Class", "Warung Food Crawl", "Coffee & Luwak Experience", "Recipe Booklet"],
            featured: false,
            includes: ["Market Tour", "Cooking Instructor", "All Ingredients", "Meals Throughout Day", "Transport", "Recipe Book"]
        },
        {
            id: "10",
            slug: "bali-waterfall-explorer",
            title: "Bali Waterfall Explorer",
            subTitle: "Chasing Waterfalls Full Day",
            price: "Rp 1,750,000",
            rating: "4.8 (1.4k)",
            location: "North & Central Bali",
            duration: "10 hours",
            image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop",
            description: "Discover Bali's most spectacular waterfalls, hidden canyons, and natural swimming pools in this adventurous day tour.",
            highlights: ["Sekumpul Waterfall (Tallest in Bali)", "Gitgit Waterfall", "Tibumana Hidden Waterfall", "Natural Swimming Pools", "Jungle Trekking", "Traditional Village Visit"],
            featured: true,
            includes: ["Transport", "Guide", "Lunch Pack", "Trekking Poles", "Safety Equipment", "Entrance Fees"]
        }
    ],
    articles: [
        {
            id: "1",
            slug: "complete-guide-bali-temples",
            title: "The Complete Guide to Bali's Sacred Temples",
            excerpt: "Discover the spiritual heart of Bali through its ancient temples. Our comprehensive guide covers history, etiquette, and must-visit temples for every traveler.",
            content: `<h2>The Spiritual Landscape of Bali</h2>
            <p>Bali, known as the "Island of the Gods," is home to over 20,000 temples (pura) that serve as the spiritual backbone of Balinese Hinduism. Each temple has a unique purpose and architectural style.</p>
            
            <h3>Types of Balinese Temples</h3>
            <p><strong>Pura Kahyangan Jagat:</strong> The nine directional temples that protect Bali from evil spirits.</p>
            <p><strong>Pura Desa:</strong> Village temples for community gatherings and ceremonies.</p>
            <p><strong>Pura Dalem:</strong> Death and cremation temples.</p>
            <p><strong>Family Temples:</strong> Private temples within residential compounds.</p>
            
            <h3>Temple Etiquette Essentials</h3>
            <ul>
            <li>Always wear a sarong and sash (provided at most temples)</li>
            <li>Women should avoid temples during menstruation</li>
            <li>Never point your feet toward shrines or offerings</li>
            <li>Respect ongoing ceremonies by observing quietly</li>
            <li>Ask permission before taking photos of worshippers</li>
            </ul>
            
            <h3>Must-Visit Temples for First-Timers</h3>
            <p><strong>Tanah Lot:</strong> Sea temple with spectacular sunset views.</p>
            <p><strong>Uluwatu:</strong> Cliff-top temple with Kecak fire dance performances.</p>
            <p><strong>Besakih:</strong> Bali's mother temple on Mount Agung's slopes.</p>
            <p><strong>Tirta Empul:</strong> Holy water temple for purification rituals.</p>`,
            date: "March 15, 2026",
            author: "Dr. Alexandra Chen",
            category: "Culture & Spirituality",
            readTime: "8 min",
            image: "https://images.unsplash.com/photo-1523413363572-3c7d81c746d4?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "2",
            slug: "balinese-food-guide",
            title: "Beyond Nasi Goreng: A Deep Dive into Balinese Cuisine",
            excerpt: "Explore the complex flavors and traditions of authentic Balinese food, from ceremonial dishes to street food delights.",
            content: `<h2>The Flavors of Bali</h2>
            <p>Balinese cuisine is a symphony of flavors created from fresh local ingredients, complex spice pastes (bumbu), and centuries-old cooking techniques.</p>
            
            <h3>Essential Balinese Dishes</h3>
            <p><strong>Babi Guling:</strong> Suckling pig roasted over open fire with traditional spices.</p>
            <p><strong>Bebek Betutu:</strong> Duck slow-cooked in banana leaves with rich spices.</p>
            <p><strong>Lawar:</strong> Traditional salad made with vegetables, coconut, and minced meat.</p>
            <p><strong>Sate Lilit:</strong> Minced seafood satay wrapped around lemongrass sticks.</p>
            
            <h3>Ceremonial Foods</h3>
            <p>During religious ceremonies, you'll find special offerings like <em>nasi tumpeng</em> (ceremonial rice cone) and colorful rice cakes (<em>jaja</em>) that carry deep symbolic meaning.</p>
            
            <h3>Best Food Experiences in Bali</h3>
            <ul>
            <li>Warung Babi Guling Ibu Oka in Ubud</li>
            <li>Night markets in Gianyar and Denpasar</li>
            <li>Traditional cooking classes in family compounds</li>
            <li>Local food tours through traditional villages</li>
            </ul>`,
            date: "March 10, 2026",
            author: "Isabella Rossi",
            category: "Food & Dining",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop"
        },
        {
            id: "3",
            slug: "balinese-cultural-ceremonies",
            title: "Understanding Balinese Ceremonies: A Cultural Primer",
            excerpt: "Learn about the rich tapestry of Balinese ceremonies, from daily offerings to grand temple festivals that define island life.",
            content: `<h2>The Rhythm of Ritual in Bali</h2>
            <p>Balinese life is structured around a complex calendar of ceremonies that mark everything from daily routines to major life events and temple anniversaries.</p>
            
            <h3>Daily Offerings (Canang Sari)</h3>
            <p>Every morning, Balinese women prepare and place small palm leaf baskets containing flowers, rice, and incense around their homes, shops, and temples.</p>
            
            <h3>Major Temple Festivals (Odalan)</h3>
            <p>Temples celebrate their anniversary every 210 days according to the Balinese Pawukon calendar. These multi-day festivals feature processions, offerings, and performances.</p>
            
            <h3>Life Cycle Ceremonies</h3>
            <p><strong>Otonan:</strong> Birthday ceremony every 210 days</p>
            <p><strong>Metatah:</strong> Tooth filing ceremony for adolescents</p>
            <p><strong>Pawiwahan:</strong> Traditional Balinese wedding</p>
            <p><strong>Ngaben:</strong> Cremation ceremony to release the soul</p>`,
            date: "March 5, 2026",
            author: "Ketut Wijaya",
            category: "Culture & Traditions",
            readTime: "7 min",
            image: "https://images.unsplash.com/photo-1562887189-e5d078343de4?q=80&w=2074&auto=format&fit=crop"
        },
        {
            id: "4",
            slug: "bali-hidden-waterfalls",
            title: "Bali's Hidden Waterfalls: Beyond the Tourist Trail",
            excerpt: "Discover secret waterfalls, natural swimming holes, and pristine jungle pools that most tourists never find.",
            content: `<h2>Bali's Secret Water World</h2>
            <p>While popular waterfalls like Gitgit and Tegenungan attract crowds, Bali hides dozens of lesser-known cascades in its interior mountains and northern jungles.</p>
            
            <h3>Hidden Gems Worth the Trek</h3>
            <p><strong>Kanto Lampo:</strong> Unique rock formation waterfall near Gianyar</p>
            <p><strong>Tibumana:</strong> Fairytale waterfall behind a curtain of water</p>
            <p><strong>Nungnung:</strong> Powerful 50-meter waterfall in cool highlands</p>
            <p><strong>Banyumala Twin:</strong> Two parallel waterfalls in pristine setting</p>
            
            <h3>Waterfall Etiquette & Safety</h3>
            <ul>
            <li>Respect local customs and offerings at waterfall entrances</li>
            <li>Check water conditions during rainy season</li>
            <li>Use proper footwear for slippery rocks</li>
            <li>Don't swim under extremely powerful falls</li>
            <li>Take all trash with you when leaving</li>
            </ul>`,
            date: "February 28, 2026",
            author: "Marcus Thorne",
            category: "Adventure & Nature",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop"
        },
        {
            id: "5",
            slug: "balinese-traditional-arts",
            title: "The Living Arts of Bali: Dance, Music & Craftsmanship",
            excerpt: "Explore Bali's vibrant artistic traditions from intricate dances to gamelan music and masterful craftsmanship.",
            content: `<h2>Art as Spiritual Practice</h2>
            <p>In Bali, art is not separate from daily life or spirituality. Traditional arts are offerings to the gods and expressions of cultural identity.</p>
            
            <h3>Traditional Dances</h3>
            <p><strong>Legong:</strong> Graceful dance performed by young girls</p>
            <p><strong>Barong:</strong> Dance drama depicting battle between good and evil</p>
            <p><strong>Kecak:</strong> The mesmerizing "monkey chant" dance</p>
            <p><strong>Pendet:</strong> Welcoming dance with flower offerings</p>
            
            <h3>Gamelan Music</h3>
            <p>The distinctive metallic orchestra that accompanies dances and ceremonies, with different ensembles for different occasions.</p>
            
            <h3>Craft Villages</h3>
            <p><strong>Ubud:</strong> Painting and modern arts</p>
            <p><strong>Celuk:</strong> Silver and goldsmithing</p>
            <p><strong>Mas:</strong> Wood carving</p>
            <p><strong>Batubulan:</strong> Stone carving</p>`,
            date: "February 20, 2026",
            author: "Dr. Alexandra Chen",
            category: "Arts & Culture",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1562887189-e5d078343de4?q=80&w=2074&auto=format&fit=crop"
        },
        {
            id: "6",
            slug: "bali-sustainable-travel",
            title: "Sustainable Travel in Bali: How to Visit Responsibly",
            excerpt: "Practical tips for minimizing your environmental impact and supporting local communities while enjoying Bali.",
            content: `<h2>Traveling Consciously in Paradise</h2>
            <p>As Bali faces environmental challenges, responsible tourism practices are more important than ever for preserving the island's beauty.</p>
            
            <h3>Reduce Plastic Waste</h3>
            <ul>
            <li>Carry a reusable water bottle (many hotels offer refills)</li>
            <li>Say no to plastic straws and bags</li>
            <li>Choose accommodations with proper waste management</li>
            <li>Support cafes using biodegradable packaging</li>
            </ul>
            
            <h3>Support Local Communities</h3>
            <p>Choose locally-owned accommodations, eat at warungs (local restaurants), hire local guides, and buy directly from artisans.</p>
            
            <h3>Respect Cultural Sites</h3>
            <p>Follow temple etiquette, dress modestly, and never touch sacred objects without permission.</p>
            
            <h3>Eco-Friendly Activities</h3>
            <p>Consider reef-safe snorkeling, wildlife conservation visits, beach clean-ups, and organic farm tours.</p>`,
            date: "February 15, 2026",
            author: "Environmental Bali Group",
            category: "Sustainable Travel",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "7",
            slug: "balinese-wellness-traditions",
            title: "Balinese Wellness Traditions: More Than Just Spas",
            excerpt: "Discover authentic Balinese healing practices, traditional medicine, and spiritual wellness beyond commercial spa treatments.",
            content: `<h2>Holistic Healing Balinese Style</h2>
            <p>Balinese wellness combines physical treatments with spiritual practices for holistic healing rooted in centuries-old traditions.</p>
            
            <h3>Traditional Healing (Usada)</h3>
            <p><strong>Balian:</strong> Traditional healers who diagnose and treat using herbs, massage, and spiritual methods</p>
            <p><strong>Jamu:</strong> Herbal medicine made from turmeric, ginger, tamarind, and other local plants</p>
            
            <h3>Purification Rituals</h3>
            <p><strong>Melukat:</strong> Spiritual cleansing at holy water temples</p>
            <p><strong>Meditation:</strong> Traditional practices at mountain temples and meditation centers</p>
            
            <h3>Authentic Spa Experiences</h3>
            <p>Look for treatments using traditional ingredients: boreh (herbal compress), lulur (turmeric scrub), and authentic Balinese massage techniques.</p>`,
            date: "February 10, 2026",
            author: "Ketut Wijaya",
            category: "Wellness & Health",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "8",
            slug: "bali-with-children",
            title: "Family Travel in Bali: Activities for All Ages",
            excerpt: "Plan the perfect family vacation with kid-friendly attractions, cultural activities, and practical tips for traveling with children.",
            content: `<h2>Bali for the Whole Family</h2>
            <p>Bali offers endless opportunities for family adventures, from gentle cultural experiences to exciting nature encounters.</p>
            
            <h3>Kid-Friendly Attractions</h3>
            <p><strong>Bali Safari & Marine Park:</strong> Wildlife encounters and shows</p>
            <p><strong>Waterbom Bali:</strong> Asia's #1 waterpark in Kuta</p>
            <p><strong>Bali Bird Park:</strong> Tropical birds and interactive experiences</p>
            <p><strong>Bali Treetop Adventure Park:</strong> Ziplines and aerial courses</p>
            
            <h3>Cultural Activities for Families</h3>
            <ul>
            <li>Family-friendly cooking classes</li>
            <li>Traditional kite making workshops</li>
            <li>Shadow puppet performances</li>
            <li>Easy temple visits with engaging guides</li>
            </ul>
            
            <h3>Practical Tips</h3>
            <p>Choose accommodations with family rooms, pack child-friendly mosquito repellent, schedule downtime between activities, and involve children in cultural learning.</p>`,
            date: "February 5, 2026",
            author: "Family Travel Experts",
            category: "Family Travel",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "9",
            slug: "balinese-architecture-guide",
            title: "Balinese Architecture: From Family Compounds to Royal Palaces",
            excerpt: "Understand the principles and symbolism behind traditional Balinese buildings, gardens, and sacred spaces.",
            content: `<h2>The Architecture of Harmony</h2>
            <p>Balinese architecture follows the Tri Hita Karana philosophy of maintaining harmony between humans, nature, and the divine.</p>
            
            <h3>Traditional Family Compound (Umah)</h3>
            <p>A walled compound divided into three zones: sacred (temple area), intermediate (living quarters), and impure (kitchen and animals).</p>
            
            <h3>Key Architectural Elements</h3>
            <p><strong>Alang-alang:</strong> Traditional thatched roofing</p>
            <p><strong>Bale:</strong> Open pavilions for various functions</p>
            <p><strong>Candi Bentar:</strong> Split gate symbolizing spiritual division</p>
            <p><strong>Wantilan:</strong> Community hall for gatherings</p>
            
            <h3>Sacred Geometry</h3>
            <p>Buildings are oriented toward mountains (kaja, sacred direction) or sea (kelod, less sacred), with careful attention to cosmic alignment.</p>`,
            date: "January 28, 2026",
            author: "Dr. Alexandra Chen",
            category: "Architecture & Design",
            readTime: "7 min",
            image: "https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?q=80&w=2074&auto=format&fit=crop"
        },
        {
            id: "10",
            slug: "balinese-festival-calendar",
            title: "Balinese Festival Calendar: When to Experience Major Ceremonies",
            excerpt: "Plan your visit around Bali's colorful festivals, temple anniversaries, and cultural celebrations throughout the year.",
            content: `<h2>The Cycle of Celebration</h2>
            <p>Bali's festival calendar combines Hindu religious dates with local temple anniversaries and agricultural cycles.</p>
            
            <h3>Major Annual Festivals</h3>
            <p><strong>Nyepi (March/April):</strong> Day of silence, fasting, and meditation. The entire island shuts down.</p>
            <p><strong>Galungan (every 210 days):</strong> Celebration of the victory of dharma over adharma. Streets decorated with penjor bamboo poles.</p>
            <p><strong>Kuningan (10 days after Galungan):</strong> Ancestors return to heaven after visiting during Galungan.</p>
            
            <h3>Temple Anniversaries (Odalan)</h3>
            <p>Each temple celebrates its anniversary every 210 days according to the Balinese Pawukon calendar. Dates vary by temple.</p>
            
            <h3>Arts Festivals</h3>
            <p><strong>Ubud Writers & Readers Festival (October):</strong> Literary festival attracting international authors</p>
            <p><strong>Bali Arts Festival (June-July):</strong> Month-long celebration of traditional and contemporary arts</p>
            
            <h3>Planning Your Visit</h3>
            <p>Check specific dates annually as they shift in the Gregorian calendar. Some festivals mean closures and transportation limitations.</p>`,
            date: "January 20, 2026",
            author: "Cultural Calendar Team",
            category: "Events & Festivals",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073&auto=format&fit=crop"
        }
    ]
};