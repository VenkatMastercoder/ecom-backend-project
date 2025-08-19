-- CreateTable
CREATE TABLE "public"."Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_category" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discount_percentage" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "tags" TEXT[],
    "brand" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "dimensions" JSONB NOT NULL,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "public"."Review" (
    "review_id" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "reviewer_name" TEXT NOT NULL,
    "reviewer_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "product_id" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;
