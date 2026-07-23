import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const { inviteCode } = await request.json();

  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invite_code", inviteCode)
    .single();

  if (error || !guest) {
    return NextResponse.json(
      {
        success: false,
        message: "Guest not found",
      },
      { status: 404 }
    );
  }

  if (guest.checked_in) {
    return NextResponse.json({
      success: false,
      message: "Guest already checked in",
      guest,
    });
  }

  const { data: updatedGuest, error: updateError } = await supabase
    .from("guests")
    .update({
      checked_in: true,
    })
    .eq("id", guest.id)
    .select()
    .single();

  if (updateError) {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to check in guest",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Guest checked in successfully",
    guest: updatedGuest,
  });
}