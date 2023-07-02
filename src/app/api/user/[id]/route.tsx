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

    const { jobtitle, username } = await req.json();

    const data: Data = {};

    if (typeof jobtitle === "string") {
      data.jobtitle = jobtitle;
    }

    if (typeof username === "string") {
      data.username = username;
    }

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
