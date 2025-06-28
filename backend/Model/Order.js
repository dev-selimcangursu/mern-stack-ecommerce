const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        sku: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["Beklemede", "Ödeme Tamamlandı", "Ödeme İptal Edildi"], default: "Ödeme Tamamlandı" },
    paymentMethod: { type: String },
    shippingAddress: {
      fullName: String,
      street: String,
      city: String,
      postalCode: String,
      country: String,
      phone: String,
    },
    billingAddress: {
      fullName: String,
      street: String,
      city: String,
      postalCode: String,
      country: String,
      phone: String,
    },
    status: {
      type: String,
      enum: ["Sipariş Alındı", "Sipariş Hazırlanıyor", "Kargolandı", "İptal Edildi"],
      default: "Sipariş Alındı",
    },
    trackingNumber: String,
    shippingProvider: String,
    discount: Number,
    notes: String,
    isGift: Boolean,
    couponCode: String,
    logs: [
      {
        status: String,
        changedAt: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
