import { Palette, Circle, Trash2 } from 'lucide-react';

const COLORS = [
  '#000000',
  '#EF4444',
  '#F59E0B',
  '#10B981',
  '#3B82F6',
  '#8B5CF6',
  '#EC4899',
  '#FFFFFF'
];

const SIZES = [
  { value: 2, label: 'S' },
  { value: 5, label: 'M' },
  { value: 10, label: 'L' },
  { value: 15, label: 'XL' }
];

export function Toolbar({ color, size, onColorChange, onSizeChange, onClearCanvas }) {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => onColorChange(c)}
                    className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                      color === c ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            <div className="h-8 w-px bg-gray-300" />

            <div className="flex items-center gap-3">
              <Circle className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => onSizeChange(s.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      size === s.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={onClearCanvas}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear Canvas
          </button>
        </div>
      </div>
    </div>
  );
}
