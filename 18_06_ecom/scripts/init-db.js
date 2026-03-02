const db = require('../models/index');
const hashHelper = require('../helpers/password-helper');

async function initDatabase() {
    try {
        console.log('Starting database initialization...');

        // Sync database (create tables if they don't exist)
        await db.sequelize.sync({ force: true }); // Set to true to drop all tables and recreate
        console.log('Database synced');

        // Check if admin role already exists
        let adminRole = await db.Role.findOne({ where: { name: 'admin' } });
        if (!adminRole) {
            adminRole = await db.Role.create({ name: 'admin' });
            console.log('Admin role created');
        } else {
            console.log('Admin role already exists');
        }

        // Check if admin user already exists
        let adminUser = await db.User.findOne({ 
            where: { emailAddress: 'admin@example.com' } 
        });
        
        if (!adminUser) {
            adminUser = await db.User.create({
                firstName: 'Admin',
                lastName: 'User',
                emailAddress: 'admin@example.com',
                password: hashHelper.hashPass('admin123')
            });
            console.log('Admin user created');
        } else {
            console.log('Admin user already exists');
        }

        // Assign admin role to admin user
        await adminUser.addRole(adminRole);
        console.log('Admin role assigned to admin user');

        // Create categories
        const categories = [
            { name: 'Plage' },
            { name: 'Champs' },
            { name: 'Montagne' },
        ];

        const createdCategories = [];
        for (const categoryData of categories) {
            let category = await db.Category.findOne({ where: { name: categoryData.name } });
            if (!category) {
                category = await db.Category.create(categoryData);
                console.log(`Category created: ${category.name}`);
            } else {
                console.log(`Category already exists: ${category.name}`);
            }
            createdCategories.push(category);
        }

        // Create products
        const products = [
            {
                name: 'Maison dans les champs',
                description: "Voici un tableau qui regorge d'énergie, représentant une maison dans les champs, entourée de la nature. Les couleurs vives et les coups de pinceau expressifs donnent vie à cette scène paisible, évoquant un sentiment de sérénité et de connexion avec la terre. C'est une invitation à s'évader dans un monde où la simplicité et la beauté de la campagne sont célébrées.",
                price: 99.99,
                stock: 1,
                CategoryId: createdCategories[1].id, // Champs
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/champs_1.png' },
                ]
            },
            {
                name: 'Arbre pleureurs',
                description: "Voici un tableau qui représente un arbre pleureur, symbole de tristesse et de mélancolie. Les couleurs sombres et les formes fluides donnent vie à cette scène émouvante, évoquant une atmosphère poétique et introspective. C'est une œuvre qui invite à la réflexion sur les émotions humaines.",
                price: 299.99,
                stock: 10,
                CategoryId: createdCategories[1].id, // Champs
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/champs_2.png' }
                ]
            },
            {
                name: 'Chemin dans les champs',
                description: "Voici un tableau qui représente un chemin dans les champs, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 199.99,
                stock: 50,
                CategoryId: createdCategories[1].id, // Champs
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/champs_3.png' }
                ]
            },
            {
                name: 'Champs sous les nuages',
                description: "Voici un tableau qui représente un paysage de champs sous les nuages, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 249.99,
                stock: 30,
                CategoryId: createdCategories[1].id, // Champs
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/champs_4.png' }
                ]
            },
            {
                name: 'Arbre sur la plage',
                description: "Voici un tableau qui représente un arbre sur la plage, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 149.99,
                stock: 40,
                CategoryId: createdCategories[0].id, // Plage
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/plage_1.png' }
                ]
            },
            {
                name: 'Pluie sur la mer',
                description: "Voici un tableau qui représente une pluie sur la mer, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 199.99,
                stock: 25,
                CategoryId: createdCategories[0].id, // Plage
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/plage_2.png' }
                ]
            },
            {
                name: 'Arbre bleu sur la plage',
                description: "Voici un tableau qui représente un arbre bleu sur la plage, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 179.99,
                stock: 35,
                CategoryId: createdCategories[0].id, // Plage
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/plage_3.png' }
                ]
            },
            {
                name: 'Bateau sur la mer',
                description: "Voici un tableau qui représente un bateau sur la mer, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 159.99,
                stock: 30,
                CategoryId: createdCategories[0].id, // Plage
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/plage_4.png' }
                ]
            },
            {
                name: 'Montagne près du lac',
                description: "Voici un tableau qui représente une montagne près du lac, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 129.99,
                stock: 60,
                CategoryId: createdCategories[2].id, // Montagne
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/montagne_1.png' }
                ]
            },{
                name: 'Montagne enneigée en pleine rafale',
                description: "Voici un tableau qui représente une montagne enneigée en pleine rafale, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 149.99,
                stock: 45,
                CategoryId: createdCategories[2].id, // Montagne
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/montagne_2.png' }
                ]
            },
            {
                name: 'Montagne au près du lac glacée',
                description: "Voici un tableau qui représente une montagne au près du lac glacée, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 119.99,
                stock: 70,
                CategoryId: createdCategories[2].id, // Montagne
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/montagne_3.png' }
                ]
            },
            
            {
                name: 'Montagne au bord de la mer',
                description: "Voici un tableau qui représente une montagne au bord de la mer, évoquant une ambiance de tranquillité et de sérénité. Les couleurs douces et les lignes fluides donnent vie à cette scène paisible, où la nature semble se fondre dans une harmonie parfaite. C'est une œuvre qui invite à la contemplation et à l'évasion dans un monde calme.",
                price: 139.99,
                stock: 50,
                CategoryId: createdCategories[2].id, // Montagne
                images: [
                    { link: 'https://cdn.jsdelivr.net/gh/Luuxio/FinalECOM@main/projet-front/src/utils/products/montagne_4.png' }
                ]
            },
        ];

        for (const productData of products) {
            // Check if product already exists
            let product = await db.Product.findOne({ 
                where: { name: productData.name } 
            });

            if (!product) {
                // Extract images before creating product
                const { images, ...productInfo } = productData;
                
                // Create product
                product = await db.Product.create(productInfo);
                console.log(`Product created: ${product.name}`);

                // Create images for the product
                if (images && images.length > 0) {
                    for (const imageData of images) {
                        await db.Image.create({
                            ...imageData,
                            ProductId: product.id
                        });
                    }
                    console.log(`  - Added ${images.length} image(s)`);
                }
            } else {
                console.log(`Product already exists: ${product.name}`);
            }
        }

        console.log('\n✅ Database initialization completed successfully!');
        console.log('\n📋 Summary:');
        console.log('   - Admin user: admin@example.com');
        console.log('   - Admin password: admin123');
        console.log(`   - Categories: ${createdCategories.length}`);
        console.log(`   - Products: ${products.length}`);

        // Close the database connection
        await db.sequelize.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Error initializing database:', error);
        await db.sequelize.close();
        process.exit(1);
    }
}

// Run the initialization
initDatabase();

