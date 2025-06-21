"use client";
import { useEffect, useState, type FC } from "react";
import { useRestaurant } from "@/context/RestaurantContext";
import { getMenuItemById } from "@/lib/get-menu-item-by-id";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Triangle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GetModifiersFromItemId } from "@/lib/get-modifiers-from-item-id";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import type { MenuItem } from "@/types/menu";
import type { CartItemModifier } from "@/types/cart-item.type";
import toast from "react-hot-toast";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/Icon";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { isRestaurantOpen } from "@/lib/is-restaurant-open";

interface MenuItemProps {
  id: string;
}

const MenuItems: FC<MenuItemProps> = ({ id }) => {
  const [selectedModifiers, setSelectedModifiers] = useState<MenuItem[]>([]);
  const { items, restaurant } = useRestaurant();
  const item = getMenuItemById(id, items);
  const [quantity, setQuantity] = useState(1);
  const [selectedRadioValue, setSelectedRadioValue] = useState("");
  const [price, setPrice] = useState(0);
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();
  const isOpen = isRestaurantOpen(restaurant);

  useEffect(() => {
    item?.modifiers.map((_, index) =>
      GetModifiersFromItemId(item, items, index).map((modifier) => {
        if (
          modifier._id ===
          item.modifiers.find((modifier) => modifier.defaultSelection)
            ?.defaultSelection
        ) {
          if (selectedModifiers.length === 0) {
            setSelectedModifiers([modifier]);
            setSelectedRadioValue(modifier._id);
          }
        }
      }),
    );
  }, [item, selectedModifiers]);

  const handleModifierChange = (modifier: MenuItem, isChecked: boolean) => {
    setSelectedModifiers((prev) =>
      isChecked
        ? [...prev, modifier]
        : prev.filter((m) => m._id !== modifier._id),
    );
  };

  const handleRadioChange = (modifier: MenuItem) => {
    setSelectedModifiers((prev) => {
      const newModifiers = prev.filter((m) => {
        return !item?.modifiers
          .find((i) => !i.multiSelection)
          ?.items.some((mod) => m._id === mod);
      });
      return [...newModifiers, modifier];
    });
    setSelectedRadioValue(modifier._id);
  };

  useEffect(() => {
    let price = 0;
    if (item) {
      if (item.takeawayPrice.value > 0) {
        price = item.takeawayPrice.value;
      } else if (item.price.value > 0) {
        price = item.price.value;
      } else {
        price = 0;
      }
    }
    for (const selectedModifier of selectedModifiers) {
      if (price) {
        price += selectedModifier.price.value;
      } else {
        price = selectedModifier.price.value;
      }
    }

    if (price) {
      price = parseFloat((price * quantity).toFixed(2));
    }

    setPrice(price);
  }, [item?.price.value, quantity, selectedModifiers]);
  const modifierquantity = (modifier: MenuItem) => {
    const quantity = selectedModifiers.filter((i) => i._id === modifier._id);
    return quantity.length;
  };
  return (
    <section className="flex w-full flex-col gap-6 bg-menubackground px-4 py-10 md:px-[100px]">
      <Button
        className="font-manrope flex w-fit items-center justify-center gap-2 rounded-none bg-menuprimary px-6 py-6 text-lg font-[600] text-menuforeground hover:bg-buttonhover"
        onClick={() => router.push("/menu")}
      >
        <Image
          src="/images/arrowleft.svg"
          width={26}
          height={19}
          alt="Back"
          className="h-5 w-5"
        />
        <span className="leading-none">Menu</span>
      </Button>

      <div className="mb-[13vh] flex w-full items-start justify-center gap-5">
        <div
          className={cn(
            "flex w-full max-w-[700px] flex-col items-start justify-center gap-4 bg-itembackground px-5 py-5",
            item?.modifiers.length !== 0 && "w-1/3",
            !item && "hidden h-0 w-0",
          )}
        >
          <div className="relative w-full">
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-end justify-center overflow-hidden">
              <Image
                src="/images/image.svg"
                width={1175}
                height={119}
                alt="image"
                className="h-auto w-full object-cover"
              />
            </div>
            {item &&
            item.images.length > 0 &&
            !item?.extras?.hideMenuThumbNailImages ? (
              item && (
                <Image
                  src={item.images[0]!}
                  className="h-auto w-full object-cover md:max-h-[350px]"
                  alt="image"
                  width={1980}
                  height={1080}
                />
              )
            ) : (
              <div className="z-10 h-[350px] w-full bg-black/30 object-cover md:max-h-[350px]"></div>
            )}
          </div>
          <p className="font-manrope text-2xl font-[700] tracking-[1px] text-menusecondary">
            {item?.name}
          </p>
          <p className="font-manrope max-w-[70%] text-base font-[500] lowercase text-itemdescription">
            {item?.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            <p className="rounded-full bg-menusecondary-foreground px-4 py-1 text-xl font-[400] tracking-[1.5px] text-[#000]">
              {item && item.takeawayPrice.value > 0 ? (
                <>
                  {getCurrencySymbol(item.takeawayPrice.currency)}{" "}
                  {formattedItemPrice(item.takeawayPrice.value)}
                </>
              ) : (
                <>
                  {item && item.price.value > 0 ? (
                    <>
                      {getCurrencySymbol(item.price.currency)}{" "}
                      {formattedItemPrice(item.price.value)}
                    </>
                  ) : (
                    <>
                      {item && item.modifiers.length === 0 ? (
                        <>Free</>
                      ) : (
                        item?.modifiers.map((mod, index) =>
                          GetModifiersFromItemId(item, items, index).map(
                            (modifier) => {
                              if (
                                modifier._id ===
                                item.modifiers.find(
                                  (modifier) => modifier.defaultSelection,
                                )?.defaultSelection
                              ) {
                                return `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`;
                              }
                            },
                          ),
                        )
                      )}
                    </>
                  )}
                </>
              )}
            </p>
            <p>
              {item?.isVeg && (
                <span className="font-manrope rounded-full bg-[#1a8425] px-3 py-1 text-lg font-[700] text-white">
                  V
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p>
              <span className="font-manrope rounded-full bg-[#2752a7] px-3 py-1 text-sm font-[700] text-white">
                i
              </span>
            </p>
            <p className="font-manrope text-base tracking-[1px] text-menusecondary underline">
              Allergens & Nutrition
            </p>
          </div>
          {showNote ? (
            <div className="flex w-full flex-col gap-2">
              <Label
                htmlFor="note"
                className="flex cursor-pointer items-center gap-2 text-menuprimary"
                onClick={() => {
                  setShowNote(false);
                }}
              >
                <Icons.pencil />
                Cooking Instruction
              </Label>
              <Textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="border-none bg-menubackground text-[17px] text-placeholder placeholder:text-placeholder"
                placeholder="write here"
                maxLength={200}
              />
            </div>
          ) : (
            <p
              className="flex w-fit cursor-pointer items-center gap-2 text-menuprimary hover:text-menuprimary hover:underline"
              onClick={() => {
                setShowNote(true);
              }}
            >
              <Icons.pencil />
              Cooking Instructions
            </p>
          )}
        </div>
        <div
          className={cn(
            "flex w-full flex-col gap-5 md:w-2/3",
            item?.modifiers.length === 0 && "hidden w-0",
          )}
        >
          {item?.modifiers.map((mod, index) => {
            return (
              <div className="w-full bg-itembackground p-5" key={index}>
                <div className="flex flex-col items-start justify-center gap-2 border-b-[0.1px] border-b-menuprimary py-3">
                  <div className="flex items-center justify-start gap-5">
                    <Triangle
                      fill="#AA8B55"
                      className="rotate-90 text-menuprimary"
                    />
                    <p className="font-manrope text-xl font-[700] leading-none tracking-[1px] text-menusecondary">
                      {mod.header}
                    </p>
                  </div>
                  {mod.required ? (
                    <p className="font-manrope text-base font-[500] leading-none tracking-[1px] text-menusecondary">
                      Select any options (Minimum One)
                    </p>
                  ) : (
                    <p className="font-manrope text-base font-[500] leading-none tracking-[1px] text-menusecondary">
                      Addons are optional.
                    </p>
                  )}
                </div>
                {mod.multiSelection
                  ? item &&
                    GetModifiersFromItemId(item, items, index).length > 0 && (
                      <div>
                        {GetModifiersFromItemId(item, items, index).map(
                          (modifier) => (
                            <div
                              className="flex items-center justify-between gap-5 border-b-[1px] border-b-menuprimary py-5"
                              key={modifier._id}
                            >
                              <div className="flex items-center justify-center gap-5">
                                <Checkbox
                                  id={modifier._id}
                                  checked={selectedModifiers.some(
                                    (m) => m._id === modifier._id,
                                  )}
                                  onCheckedChange={(checked) =>
                                    handleModifierChange(
                                      modifier,
                                      checked as boolean,
                                    )
                                  }
                                  className="h-6 w-6 border-menuprimary"
                                />
                                <div className="flex flex-col items-start justify-center">
                                  <Label
                                    htmlFor={modifier._id}
                                    className="items-center gap-2 text-lg font-[700] text-menusecondary"
                                  >
                                    {modifier.name}
                                  </Label>
                                  <Label
                                    htmlFor={modifier._id}
                                    className="font-manrope items-center gap-2 text-base font-[400] text-menusecondary"
                                  >
                                    {modifier.description}
                                  </Label>
                                </div>
                              </div>

                              <div className="flex w-fit items-center justify-center gap-5">
                                {modifierquantity(modifier) > 0 &&
                                  mod.extraAllowed && (
                                    <div className="flex items-center justify-center gap-3">
                                      <Button
                                        className="rounded-full border-[2px] border-menusecondary bg-transparent p-0 px-2 py-0 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                                        onClick={() => {
                                          setSelectedModifiers((prev) => {
                                            const index = prev.findIndex(
                                              (m) => m._id === modifier._id,
                                            );
                                            if (index !== -1) {
                                              const newModifiers = [...prev];
                                              newModifiers.splice(index, 1);
                                              return newModifiers;
                                            }
                                            return prev;
                                          });
                                        }}
                                      >
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                      <p className="text-base font-[500] text-menuprimary">
                                        {modifierquantity(modifier)}
                                      </p>
                                      <Button
                                        className="rounded-full border-[2px] border-menusecondary bg-transparent p-0 px-2 py-0 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                                        onClick={() => {
                                          setSelectedModifiers((prev) => [
                                            ...prev,
                                            modifier,
                                          ]);
                                        }}
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  )}
                                <p className="font-manrope text-lg font-[700] tracking-[1px] text-menuprimary">
                                  {modifier.price && modifier.price.value > 0
                                    ? `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`
                                    : "FREE"}
                                </p>
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    )
                  : item &&
                    GetModifiersFromItemId(item, items, index).length > 0 && (
                      <div>
                        <RadioGroup
                          value={selectedRadioValue}
                          onValueChange={(value) => {
                            const selectedradio = GetModifiersFromItemId(
                              item,
                              items,
                              index,
                            ).find((m) => m._id === value);
                            if (selectedradio) {
                              handleRadioChange(selectedradio);
                            }
                          }}
                        >
                          {GetModifiersFromItemId(item, items, index).map(
                            (modifier) => (
                              <div
                                className="flex items-center justify-between gap-5 border-b-[1px] border-b-menuprimary py-5"
                                key={modifier._id}
                              >
                                <div className="flex items-center justify-center gap-5">
                                  <RadioGroupItem
                                    id={modifier._id}
                                    value={modifier._id}
                                    className="h-6 w-6 border-menuprimary"
                                  />
                                  <div className="flex flex-col items-start justify-center">
                                    <Label
                                      htmlFor={modifier._id}
                                      className="items-center gap-2 text-lg font-[700] text-menusecondary"
                                    >
                                      {modifier.name}
                                    </Label>
                                    <Label
                                      htmlFor={modifier._id}
                                      className="font-manrope items-center gap-2 text-base font-[400] text-menusecondary"
                                    >
                                      {modifier.description}
                                    </Label>
                                  </div>
                                </div>
                                <div className="flex w-fit items-center justify-center gap-5">
                                  {modifierquantity(modifier) > 0 &&
                                    mod.extraAllowed && (
                                      <div className="flex items-center justify-center gap-3">
                                        <Button
                                          className="rounded-full border-[2px] border-menusecondary bg-transparent p-0 px-2 py-0 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                                          onClick={() => {
                                            setSelectedModifiers((prev) => {
                                              const index = prev.findIndex(
                                                (m) => m._id === modifier._id,
                                              );
                                              if (index !== -1) {
                                                const newModifiers = [...prev];
                                                newModifiers.splice(index, 1);
                                                return newModifiers;
                                              }
                                              return prev;
                                            });
                                          }}
                                        >
                                          <Minus className="h-4 w-4" />
                                        </Button>
                                        <p className="text-base font-[500] text-menuprimary">
                                          {modifierquantity(modifier)}
                                        </p>
                                        <Button
                                          className="rounded-full border-[2px] border-menusecondary bg-transparent p-0 px-2 py-0 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                                          onClick={() => {
                                            setSelectedModifiers((prev) => [
                                              ...prev,
                                              modifier,
                                            ]);
                                          }}
                                        >
                                          <Plus className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    )}
                                  <p className="font-manrope text-lg font-[700] tracking-[1px] text-menuprimary">
                                    {modifier.price && modifier.price.value > 0
                                      ? `${getCurrencySymbol(modifier.price.currency)} ${formattedItemPrice(modifier.price.value)}`
                                      : "FREE"}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </RadioGroup>
                      </div>
                    )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-40 flex h-fit w-full items-center justify-center gap-10 bg-itembackground py-5 pr-[14%]">
        {restaurant?.onlineOrder &&
          (restaurant?.isDeliveryEnabled || restaurant.isTakeAwayEnabled) && (
            <>
              <div className="flex items-center justify-center gap-5">
                <button
                  className="rounded-full border-[2px] border-menusecondary bg-transparent px-1 py-1 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                  onClick={() => {
                    setQuantity((prev) => Math.max(prev - 1, 1));
                  }}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <p className="font-manrope text-5xl font-[600] text-menuprimary">
                  {quantity && quantity}
                </p>
                <button
                  className="rounded-full border-[2px] border-menusecondary bg-transparent px-1 py-1 text-menusecondary transition-all duration-150 ease-out hover:scale-[1.2]"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {isOpen &&
                item?.extras?.availability?.days.includes(
                  format(Date.now(), "EEEE").toLowerCase(),
                ) &&
                item.extras?.menuItemOrderType === "both" && (
                  <Button
                    className="font-manrope relative flex w-[400px] items-center justify-between rounded-none bg-menuprimary px-5 py-7 text-lg font-[700] text-menuforeground hover:bg-buttonhover"
                    onClick={() => {
                      if (!item) return;

                      const modifiers: CartItemModifier[] =
                        selectedModifiers.map((selectedModifier) => {
                          for (let i = 0; i < item.modifiers.length; i++) {
                            const group = item.modifiers[i];
                            if (!group) continue;

                            const groupItems = GetModifiersFromItemId(
                              item,
                              items,
                              i,
                            );
                            if (
                              groupItems.some(
                                (groupItem) =>
                                  groupItem._id === selectedModifier._id,
                              )
                            ) {
                              return {
                                _idModifiers: group._id,
                                _idMenuItem: selectedModifier._id,
                                price: selectedModifier.price,
                              };
                            }
                          }
                          return {
                            _idModifiers: "",
                            _idMenuItem: selectedModifier._id,
                            price: selectedModifier.price,
                          };
                        });

                      addItem({
                        name: item.name,
                        _idMenuItem: item._id,
                        quantity,
                        price: {
                          value: price ?? 0,
                          currency: item.price.currency,
                        },
                        notes: note,
                        modifiers,
                        images: item.images,
                        description: item.description,
                      });
                      toast.success("Item added to cart");
                      setQuantity(1);
                      setNote("");
                      setSelectedModifiers([]);
                      router.push("/menu");
                    }}
                  >
                    <span className="absolute -top-2 left-4">
                      <Triangle
                        fill="#fbead2"
                        className="rotate-180 text-menusecondary"
                      />
                    </span>
                    <span className="font-bold">ADD TO CART</span>{" "}
                    <span>
                      {item && getCurrencySymbol(item.price.currency)}{" "}
                      {price && formattedItemPrice(price)}
                    </span>
                  </Button>
                )}
            </>
          )}
      </div>
    </section>
  );
};

export default MenuItems;
