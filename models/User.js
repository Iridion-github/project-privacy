import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  anagraphics: {
    name: {
      type: String,
      required: [true, 'name is required!'],
      unique: false,
      trim: false
    },
    surname: {
      type: String,
      required: [true, 'surname is required!'],
      unique: false,
      trim: false
    },
    phone: {
      registration: {
        type: String,
        required: [true, 'registration phonenumber is required!'],
        unique: true,
        trim: true
      },
      public: {
        type: String,
        required: false,
        unique: true,
        trim: true
      },
    },
  },
  email: {
    registration: {
      type: String,
      required: [true, 'registration email is required!'],
      unique: true,
      trim: true
    },
    public: {
      type: String,
      required: false,
      unique: true,
      trim: true
    },
  },
  nickname: {
    type: String,
    required: [true, 'nickname is required!'],
    unique: true,
    trim: false
  },
  password: {
    type: String,
    required: [true, 'password is required!'],
    unique: true,
    trim: false
  },
  role: {
    roleId: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    name: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
    permissions: {
      type: String,
      required: false,
      unique: false,
      trim: false
    },
  },
  payment_methods: {
    cards: [
      {
        cardName: {
          type: String,
          required: [true, 'cardName is required!'],
          unique: false,
          trim: false
        },
        cardType: {
          type: String,
          required: [true, 'cardType is required!'],
          unique: false,
          trim: false
        },
        cardNumber: {
          type: String,
          required: [true, 'cardNumber is required!'],
          unique: true,
          trim: false
        },
        cardExpiration: {
          type: Date,
          required: [true, 'cardExpiration is required!'],
          unique: false,
          trim: false
        },
        cardSecretCode: {
          type: String,
          required: [true, 'cardSecretCode is required!'],
          unique: false,
          trim: false
        },
        isDefault: {
          type: Boolean,
          required: [true, 'isDefault is required!'],
          unique: false,
          trim: false
        },
      }
    ]
  }
});




export default mongoose.models.User || mongoose.model("User", UserSchema);