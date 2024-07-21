-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "txnId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "transaction_code" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "transaction_uuid" TEXT NOT NULL,
    "product_code" TEXT NOT NULL,
    "signed_field_names" TEXT NOT NULL,
    "signature" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_txnId_key" ON "Payment"("txnId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_transaction_code_key" ON "Transaction"("transaction_code");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_txnId_fkey" FOREIGN KEY ("txnId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
