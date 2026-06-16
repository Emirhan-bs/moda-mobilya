import { useState } from 'react';
import { X, Eye, EyeOff, LogIn, UserPlus, KeyRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
  onClose: () => void;
}

type Tab = 'login' | 'register' | 'reset';

export default function LoginModal({ onClose }: LoginModalProps) {
  const { login, register, resetPassword, loginWithGoogle } = useAuth(); const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const reset = () => { setError(''); setSuccess(''); };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    setLoading(true);
    const { error } = await login(email, password);
    setLoading(false);
    if (error) {
      setError('E-posta veya şifre hatalı.');
    } else {
      onClose();
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    if (password.length < 6) {
      setError('Şifre en az 6 karakter olmalıdır.');
      return;
    }
    setLoading(true);
    const { error } = await register(email, password);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setSuccess('Kayıt başarılı! E-postanızı doğrulayın, ardından giriş yapabilirsiniz.');
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    reset();
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) {
      setError(error);
    } else {
      setSuccess('Şifre sıfırlama bağlantısı e-postanıza gönderildi.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {tab === 'login' && <><LogIn className="w-5 h-5 text-white" /><h2 className="text-white font-bold text-lg">Giriş Yap</h2></>}
            {tab === 'register' && <><UserPlus className="w-5 h-5 text-white" /><h2 className="text-white font-bold text-lg">Kayıt Ol</h2></>}
            {tab === 'reset' && <><KeyRound className="w-5 h-5 text-white" /><h2 className="text-white font-bold text-lg">Şifremi Unuttum</h2></>}
          </div>
          <button onClick={onClose} className="text-gray-300 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => { setTab('login'); reset(); }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === 'login' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Giriş Yap
          </button>
          <button
            onClick={() => { setTab('register'); reset(); }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === 'register' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Kayıt Ol
          </button>
          <button
            onClick={() => { setTab('reset'); reset(); }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${tab === 'reset' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Şifremi Unuttum
          </button>
        </div>

        <div className="px-6 py-6 space-y-4">
          <button
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-6 border-2 border-gray-200 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all font-medium text-gray-700"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5 h-5" />
            Google ile devam et
          </button>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">veya</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
            />
          </div>
          

          {/* Password (login + register only) */}
          {tab !== 'reset' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {tab === 'register' && (
                <p className="text-xs text-gray-400 mt-1">En az 6 karakter</p>
              )}
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm text-green-700">
              {success}
            </div>
          )}

          <button
            onClick={tab === 'login' ? handleLogin : tab === 'register' ? handleRegister : handleReset}
            disabled={loading}
            className="w-full bg-gray-900 hover:bg-gray-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : tab === 'login' ? (
              <><LogIn className="w-4 h-4" /> Giriş Yap</>
            ) : tab === 'register' ? (
              <><UserPlus className="w-4 h-4" /> Kayıt Ol</>
            ) : (
              <><KeyRound className="w-4 h-4" /> Bağlantı Gönder</>
            )}
          </button>

        </div>
      </div>
    </div>
  );
}