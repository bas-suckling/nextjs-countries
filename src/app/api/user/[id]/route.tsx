import { NextResponse, NextRequest } from "next/server";

import { prisma } from "../../../lib/prisma";

interface Data {
  jobtitle?: string;
  username?: string;
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    if (typeof id !== "string") {
      return new NextResponse(
        JSON.stringify({ message: "user.id must be a string" }),
        { status: 400 }
      );
    }

    const data = await req.json();

    await prisma.user.update({
      where: { id },
      data,
    });

    return NextResponse.json({
      status: "success",
      user: {
        id,
        ...data,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Unknown error occured" }),
      { status: 500 }
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return NextResponse.json({
      status: "success",
      user: {
        id: user?.id,
        jobTitle: user?.jobtitle,
        username: user?.username,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: "Unknown error occured" }),
      { status: 500 }
    );
  }
}
