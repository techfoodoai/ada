import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { cn } from "@/lib/utils";
import type { RefreshPayment } from "@/types/refresh-payment.type";
import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { ChevronDown, MoveLeft, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";

interface SuccessProps {
    id: string;
}

const Success: FC<SuccessProps> = ({ id }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const { restaurant } = useRestaurant();
    const { clearCart } = useCart();
    const [close, setClose] = useState(true);
    const { data } = useQuery({
        queryKey: ["stripe", id, "refresh-payment"],
        queryFn: async () => {
            return await axios.get(`${apiUrl}/stripe/${id}/refresh-payment`).then(
                (
                    res: AxiosResponse<{
                        data: RefreshPayment;
                    }>
                ) => res.data.data
            );
        },
        enabled: !!id,
    });

    useEffect(() => {
        if (data?._id) {
            clearCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    if (!data) {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-menubackground">
                <p className="text-4xl font-[600] tracking-[2px] text-menuprimary">Placing your order...</p>
                <Image src="/images/payment/loading.png" width={147} height={147} alt="loading" />
            </div>
        );
    }

    return (
        // <main className="flex h-full min-h-screen w-full flex-col items-center justify-center">
        //   <div className="flex aspect-square h-32 w-32 items-center justify-center rounded-full bg-primary p-4">
        //     <Check size={64} />
        //   </div>
        //   <h1 className="mt-4 text-3xl font-bold">Payment Successful</h1>
        //   <p className="mt-2 text-center text-lg">
        //     Your payment has been successfully processed. Thank you for your order.
        //   </p>

        //   <Button className="mt-4" asChild>
        //     <Link href="/">Go Home</Link>
        //   </Button>
        // </main>
        <section className="relative flex h-full w-full flex-col bg-menubackground md:px-[130px]">
            <div className="flex w-full flex-col items-center justify-center">
                {/*head section */}
                <div className="flex w-full flex-row items-center justify-between bg-menubackground px-4 py-4 md:flex-col md:items-start md:gap-12 md:px-24 md:py-8">
                    <Link href="/menu" replace className="md:hidden">
                        <Image src={"/images/home/checkout/arrow.png"} width={30} height={26} alt="heart" />
                    </Link>
                    <Link href="/" replace className="pt-4">
                        <Image src={"/images/logo.png"} width={129} height={48} alt="heart" />
                    </Link>
                    <Link href="/menu" replace className="font-manrope hidden items-center justify-center gap-2 px-[120px] text-lg text-menusecondary md:flex">
                        <MoveLeft />
                        <p className="font-manrope text-lg text-menusecondary">Back To Menu</p>
                    </Link>
                    <Search className="h-0 w-0" />
                </div>

                {/*first section */}
                <div className="relative h-full w-full bg-menubackground pb-6 md:w-2/4">
                    <div className="absolute bottom-1 left-0 top-1">
                        <Image src={"/images/home/checkout/left.png"} width={124} height={240} alt="heart" />
                    </div>
                    <div className="absolute bottom-1 right-0 top-1">
                        <Image src={"/images/home/checkout/right.png"} width={124} height={240} alt="heart" />
                    </div>
                    <div
                        className="flex h-full w-full flex-col items-center justify-center gap-3 pb-12 pt-6 md:pt-12"
                        style={{
                            backgroundImage: "url('/images/home/checkout/bg.png')",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        <div>
                            <button className="font-manrope bg-menubackground px-5 py-3 text-sm font-[800] leading-[150%] text-menuprimary md:text-base">
                                ORDER #{id.slice(-5)}
                            </button>
                        </div>
                        <h4 className="font-manrope text-center text-2xl font-[500] leading-[150%] text-menubackground md:text-4xl">We’ve got your order</h4>
                        <div className="flex flex-col">
                            <h5 className="font-manrope border-b-[1px] border-b-black text-center text-base font-[800] leading-[150%] text-menubackground md:text-lg">
                                Scheduled {data?.orderType === 2 ? "Delivery" : "Pickup"} Time
                            </h5>
                            <span className="font-manrope text-center text-lg font-[800] leading-[150%] text-menubackground md:text-xl">
                                {new Date(data?.deliveryTime ?? new Date()).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                {/*second section */}
                <div className="flex w-full flex-col gap-6 bg-menubackground px-4 py-4 md:w-2/4 md:px-0 md:py-8">
                    <div className="flex flex-col gap-2 bg-itembackground p-4 md:p-6">
                        <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-lg">Restaurant Details</h5>
                        <h4 className="font-manrope pb-2 text-sm font-[400] capitalize leading-[80%] tracking-[0.86px] text-menusecondary md:text-lg">{restaurant?.name}</h4>
                        <p className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-menusecondary md:text-base">
                            {restaurant?.address.firstLine} {restaurant?.address.secondLine}
                            <br />
                            {restaurant?.address.city}
                            {restaurant?.address.countryCode}
                            {restaurant?.address.postCode}
                        </p>
                        <span className="font-manrope text-xs font-[400] leading-[150%] tracking-[1.02px] text-menusecondary underline decoration-menusecondary decoration-1 underline-offset-4 md:text-base">
                            {restaurant?.contactNumber}
                        </span>
                        <div className="flex flex-row gap-3 pt-6">
                            <Link
                                href={`https://www.google.com/maps/place/${restaurant?.address?.coords[0]},${restaurant?.address?.coords[1]}`}
                                target="_blank"
                                className="font-inter border border-menuprimary bg-menubackground px-4 py-3 text-center text-sm font-[700] uppercase leading-[22px] text-menuprimary hover:bg-menuprimary hover:text-menusecondary md:text-base"
                            >
                                Get Directions
                            </Link>
                            <Link
                                href={`tel:${restaurant?.contactNumber}`}
                                target="_blank"
                                className="font-inter border border-menuprimary bg-menubackground px-4 py-3 text-center text-sm font-[700] uppercase leading-[22px] text-menuprimary hover:bg-menuprimary hover:text-menusecondary md:text-base"
                            >
                                Call restaurant
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-4 md:pb-6">
                        <div className="flex flex-row justify-between border-b border-menuprimary pb-2" onClick={() => setClose(!close)}>
                            <h5 className="font-manrope text-lg font-[700] leading-[150%] text-menusecondary md:text-xl">View order details</h5>
                            <ChevronDown className={cn("h-6 w-6 rotate-180 transition-all duration-500 ease-in", !close && "rotate-0")} />
                        </div>
                        <div
                            className={cn(
                                "flex w-full flex-col gap-3 overflow-hidden transition-all duration-500 ease-in",
                                close ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                            )}
                        >
                            <div className="flex flex-row justify-between border-b border-menuprimary pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">Sub-Total</h5>
                                <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">£{formattedItemPrice(data?.totalCartAmount)}</span>
                            </div>
                            <div className="flex flex-row justify-between border-b border-menuprimary pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">Order Total</h5>
                                <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">£{formattedItemPrice(data?.totalAmount)}</span>
                            </div>
                            <div className="flex flex-row justify-between border-b border-menuprimary pb-2">
                                <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">{data?.notes}</h5>
                            </div>
                            {data.cart.map((item, index) => (
                                <div className="flex flex-row justify-between border-b border-menuprimary pb-2" key={index}>
                                    <h5 className="font-manrope text-sm font-[700] leading-[150%] text-menusecondary md:text-base">
                                        {item.quantity} x {item?.menuItemName}
                                        <br />
                                        {item.notes}
                                    </h5>
                                    <span className="font-manrope text-sm font-[700] leading-[150%] text-menuprimary md:text-base">
                                        £{formattedItemPrice(item?.price.value * item.quantity)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*last section */}
                <div className="flex w-full flex-col bg-menubackground md:w-2/4">
                    <div className="flex w-full flex-row items-center justify-center gap-2 bg-menuprimary px-2 py-4">
                        {/* <Image src={"/images/home/checkout/heart.png"} width={55} height={42} alt="heart" /> */}
                        <p className="font-manrope text-xs font-[500] capitalize leading-[20px] tracking-[0.74px] text-menubackground md:text-lg">
                            Thanks for choosing us! Your food will be freshly prepared and ready soon.
                        </p>
                    </div>
                    {data.orderType !== 2 && (
                        <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-8">
                            <h3 className="font-manrope pt-4 text-center text-lg font-[800] leading-[150%] text-menuprimary md:pt-6 md:text-2xl">How to collect your food </h3>
                            <div>
                                <span className="font-manrope flex h-12 w-12 items-center justify-center rounded-full bg-menuprimary text-center text-base font-[800] leading-[150%] text-menusecondary md:text-xl">
                                    1
                                </span>
                            </div>
                            <p className="font-manrope w-[280px] text-center text-base font-[400] capitalize leading-[25px] tracking-[0.86px] text-menusecondary md:w-full md:text-lg">
                                Head to the restaurant to pick up order
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex w-full justify-end bg-menubackground px-7 py-6">
                <Link href="https://foodo.ai" className="text-primary hover:underline" target="_blank">
                    Powered By Foodo
                </Link>
            </div>
        </section>
    );
};

export default Success;
